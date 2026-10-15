'use client';

export type MetaStandardEvent =
  | 'PageView'
  | 'ViewContent'
  | 'Lead'
  | 'Contact'
  | 'Schedule'
  | 'Search'
  | 'CompleteRegistration';

export type MetaEventName = MetaStandardEvent | (string & {});
export type MetaEventParams = Record<string, string | number | boolean | undefined>;
type Fbq = (...args: unknown[]) => void;

const CONSENT_STORAGE_KEY = 'av_consent_v1';
const ATTRIBUTION_STORAGE_KEY = 'av_meta_attribution_v1';
const DEDUPE_WINDOW_MS = 5_000;
const lastFired = new Map<string, number>();

function hasAdConsent() {
  if (typeof window === 'undefined') return false;
  try {
    return JSON.parse(window.localStorage.getItem(CONSENT_STORAGE_KEY) || 'null')?.ad_storage === 'granted';
  } catch {
    return false;
  }
}

function getFbq(): Fbq | undefined {
  if (typeof window === 'undefined') return undefined;
  return (window as Window & { fbq?: Fbq }).fbq;
}

function getAttributionParams(): MetaEventParams {
  if (typeof window === 'undefined') return {};
  try {
    const saved = JSON.parse(window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) || 'null');
    if (saved) return saved as MetaEventParams;

    const params = new URLSearchParams(window.location.search);
    const attribution: MetaEventParams = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((key) => {
      const value = params.get(key);
      if (value) attribution[key] = value.slice(0, 100);
    });
    if (Object.keys(attribution).length) {
      window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
    }
    return attribution;
  } catch {
    return {};
  }
}

async function waitForFbq(timeout = 5_000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const fbq = getFbq();
    if (fbq) return fbq;
    await new Promise((resolve) => window.setTimeout(resolve, 50));
  }
  return undefined;
}

export async function trackEvent(eventName: MetaEventName, params?: MetaEventParams) {
  if (!hasAdConsent()) return;

  const payload = { ...getAttributionParams(), ...(params || {}) };
  const key = `${eventName}:${JSON.stringify(payload)}`;
  const now = Date.now();
  if (now - (lastFired.get(key) ?? 0) < DEDUPE_WINDOW_MS) return;

  const fbq = await waitForFbq();
  if (!fbq || !hasAdConsent()) return;

  lastFired.set(key, now);
  try {
    const standardEvents: MetaStandardEvent[] = [
      'PageView', 'ViewContent', 'Lead', 'Contact', 'Schedule', 'Search', 'CompleteRegistration',
    ];
    fbq(standardEvents.includes(eventName as MetaStandardEvent) ? 'track' : 'trackCustom', eventName, payload);
  } catch {
    // Analytics must never interrupt navigation or form submission.
  }
}

export const trackPageView = (params?: MetaEventParams) => trackEvent('PageView', params);
export const trackViewContent = (params?: MetaEventParams) => trackEvent('ViewContent', params);
export const trackLead = (params?: MetaEventParams) => trackEvent('Lead', params);
export const trackContact = (params?: MetaEventParams) => trackEvent('Contact', params);
export const trackSchedule = (params?: MetaEventParams) => trackEvent('Schedule', params);
export const trackCustom = (eventName: string, params?: MetaEventParams) => trackEvent(eventName, params);

export function isPixelLoaded() {
  return Boolean(getFbq());
}

const metaPixel = { trackEvent, trackPageView, trackViewContent, trackLead, trackContact, trackSchedule, trackCustom, isPixelLoaded };
export default metaPixel;
