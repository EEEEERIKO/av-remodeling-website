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
    <div id="av-cookie-banner" className="fixed inset-x-0 bottom-0 z-50 md:inset-x-auto md:w-auto md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl rounded-none md:rounded-2xl bg-white/95 md:bg-white/70 backdrop-blur-md p-3 md:p-6 shadow-2xl ring-1 ring-slate-900/5 dark:bg-slate-900/90 md:dark:bg-slate-900/80 transition-all">
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-sm md:text-base font-headline font-semibold text-tertiary">Cookies</h3>
          <p className="mt-1 text-xs md:text-sm text-on-surface-variant">We use cookies to improve your experience.</p>
        </div>
        <div className="flex gap-2 md:gap-3">
          <button
            className="flex-1 md:flex-initial rounded px-2 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-on-surface-variant hover:bg-surface-container-low"
            onClick={() => { openPreferences(); }}
          >
            Prefs
          </button>
          <button
            className="flex-1 md:flex-initial rounded bg-slate-800 px-2 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-white hover:brightness-95"
            onClick={() => {
              acceptAll();
              updateConsent({ analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
              setOpen(false);
            }}
          >
            Accept
          </button>
          <button
            className="flex-1 md:flex-initial rounded border border-outline-variant px-2 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-on-surface-variant hover:bg-surface-container-low"
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
