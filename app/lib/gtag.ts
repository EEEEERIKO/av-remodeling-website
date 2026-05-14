'use client';

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-M91JGBERT1';

type ConsentPayload = {
  analytics_storage?: 'granted' | 'denied';
  ad_storage?: 'granted' | 'denied';
  ad_user_data?: 'granted' | 'denied';
  ad_personalization?: 'granted' | 'denied';
};

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function ensureDataLayer() {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(){
    // @ts-ignore
    window.dataLayer.push(arguments);
  } as any;
}

export function setDefaultConsent() {
  if (typeof window === 'undefined') return;
  ensureDataLayer();
  window.gtag?.('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

export function updateConsent(payload: ConsentPayload) {
  if (typeof window === 'undefined') return;
  ensureDataLayer();
  window.gtag?.('consent', 'update', payload);
}

export function gtagConfigSendPageview() {
  if (typeof window === 'undefined') return;
  ensureDataLayer();
  window.gtag?.('config', GA_ID, { send_page_view: true });
}
