'use client';

import { useCallback, useEffect, useState } from 'react';

export type ConsentState = {
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
};

const STORAGE_KEY = 'av_consent_v1';

const DEFAULT_CONSENT: ConsentState = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
};

export function readConsentFromStorage(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    return parsed;
  } catch (e) {
    return null;
  }
}

export function writeConsentToStorage(consent: ConsentState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch (e) {
    // ignore
  }
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = readConsentFromStorage();
    setConsent(stored ?? null);
  }, []);

  const acceptAll = useCallback(() => {
    const accepted: ConsentState = {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    };
    setConsent(accepted);
    writeConsentToStorage(accepted);
    // dispatch event for listeners
    window.dispatchEvent(new CustomEvent('av:consent:update', { detail: accepted }));
  }, []);

  const rejectNonEssential = useCallback(() => {
    const rejected: ConsentState = { ...DEFAULT_CONSENT };
    setConsent(rejected);
    writeConsentToStorage(rejected);
    window.dispatchEvent(new CustomEvent('av:consent:update', { detail: rejected }));
  }, []);

  const clearConsent = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    setConsent(null);
    window.dispatchEvent(new CustomEvent('av:consent:cleared'));
  }, []);

  const openPreferences = useCallback(() => {
    window.dispatchEvent(new CustomEvent('av:consent:open'));
  }, []);

  return {
    consent,
    acceptAll,
    rejectNonEssential,
    clearConsent,
    openPreferences,
    DEFAULT_CONSENT,
  } as const;
}
