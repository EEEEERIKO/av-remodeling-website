'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { GA_ID, updateConsent, gtagConfigSendPageview, ensureDataLayer } from '../lib/gtag';
import { trackPageView } from '../lib/metaPixel';
import { useCookieConsent } from '../hooks/useCookieConsent';

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function MetaPageViewTracking({ enabled }: { enabled: boolean }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!enabled || !pathname || !META_PIXEL_ID) return;
    void trackPageView({
      page_path: pathname,
      page_title: document.title,
      content_name: document.title,
    });
  }, [enabled, pathname]);

  return null;
}

export function Analytics() {
  const { consent } = useCookieConsent();

  useEffect(() => {
    ensureDataLayer();
  }, []);

  useEffect(() => {
    const onUpdate = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      if (!detail) return;
      updateConsent(detail);
      if (detail.analytics_storage === 'granted') gtagConfigSendPageview();
    };
    window.addEventListener('av:consent:update', onUpdate);
    return () => window.removeEventListener('av:consent:update', onUpdate);
  }, []);

  useEffect(() => {
    if (!consent) return;
    updateConsent(consent);
    if (consent.analytics_storage === 'granted') gtagConfigSendPageview();
  }, [consent]);

  return (
    <>
      {consent?.analytics_storage === 'granted' ? (
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      ) : null}

      {META_PIXEL_ID && consent?.ad_storage === 'granted' ? (
        <Script id="meta-pixel-loader" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');`}
        </Script>
      ) : null}

      <MetaPageViewTracking enabled={consent?.ad_storage === 'granted'} />
    </>
  );
}

export default Analytics;
