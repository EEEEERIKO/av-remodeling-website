'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { GA_ID, updateConsent, gtagConfigSendPageview, ensureDataLayer } from '../lib/gtag';
import { useCookieConsent } from '../hooks/useCookieConsent';

export function Analytics() {
  const { consent } = useCookieConsent();
  const [loadedGtag, setLoadedGtag] = useState(false);

  useEffect(() => {
    ensureDataLayer();
  }, []);

  // Listen to consent updates fired from hook
  useEffect(() => {
    const onUpdate = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) {
        // Update gtag consent
        updateConsent(detail);
        // If analytics granted, send config/pageview
        if (detail.analytics_storage === 'granted') {
          gtagConfigSendPageview();
        }
      }
    };
    window.addEventListener('av:consent:update', onUpdate as EventListener);
    return () => window.removeEventListener('av:consent:update', onUpdate as EventListener);
  }, []);

  // On mount, if consent already present, initialize accordingly
  useEffect(() => {
    if (!consent) return;
    updateConsent(consent);
    if (consent.analytics_storage === 'granted') {
      gtagConfigSendPageview();
    }
  }, [consent]);

  return (
    <>
      {/* Load gtag.js once the page is interactive - the inline default consent is set before this in layout */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        onLoad={() => setLoadedGtag(true)}
      />

      {/* Meta Pixel - load only when ad_storage is granted */}
      {consent?.ad_storage === 'granted' ? (
        <>
          <Script id="meta-pixel-loader" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');`}
          </Script>
        </>
      ) : null}
    </>
  );
}

export default Analytics;
