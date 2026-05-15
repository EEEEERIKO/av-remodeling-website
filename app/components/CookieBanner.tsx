'use client';

import { useEffect, useState } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';
import { updateConsent, setDefaultConsent } from '../lib/gtag';
import { gsap } from 'gsap';

export function CookieBanner() {
  const { consent, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only show the banner if consent is not set
    if (consent === null) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [consent]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('av:consent:open', onOpen as EventListener);
    return () => window.removeEventListener('av:consent:open', onOpen as EventListener);
  }, []);

  useEffect(() => {
    // set default consent signals via gtag
    setDefaultConsent();
  }, []);

  useEffect(() => {
    if (!open) return;
    const el = document.getElementById('av-cookie-banner');
    if (!el) return;
    const ctx = gsap.fromTo(
      el,
      { y: 120, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out' }
    );
    return () => { ctx.kill(); };
  }, [open]);

  if (!open) return null;

  return (
    <div id="av-cookie-banner" className="fixed inset-x-0 bottom-0 z-50 md:inset-x-auto md:w-auto md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl rounded-none md:rounded-2xl border border-outline-variant/60 bg-surface-container-lowest/95 backdrop-blur-md p-3 md:p-6 shadow-2xl transition-all dark:bg-surface-container-lowest/90">
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-sm md:text-base font-headline font-semibold text-tertiary">Cookies</h3>
          <p className="mt-1 text-xs md:text-sm text-on-surface-variant">We use cookies to improve your experience.</p>
        </div>
        <div className="flex gap-2 md:gap-3">
          <button
            className="flex-1 md:flex-initial rounded-md border border-outline-variant/70 bg-surface-container-low px-2 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-tertiary transition-colors hover:bg-surface-container-high"
            onClick={() => { openPreferences(); }}
          >
            Prefs
          </button>
          <button
            className="flex-1 md:flex-initial rounded-md bg-primary px-2 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-surface-container-lowest transition-colors hover:bg-primary/90"
            onClick={() => {
              acceptAll();
              updateConsent({ analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
              setOpen(false);
            }}
          >
            Accept
          </button>
          <button
            className="flex-1 md:flex-initial rounded-md border border-outline-variant/70 bg-transparent px-2 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container-low"
            onClick={() => {
              rejectNonEssential();
              updateConsent({ analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
              setOpen(false);
            }}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
