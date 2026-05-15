// Client-side helpers for Meta Pixel (fbq) tracking
type MetaEventName = 'Lead' | 'Contact' | 'Schedule' | 'Form Submit' | 'WhatsApp Click' | 'Phone Call Click';

const STORAGE_KEY = 'av_consent_v1';
const DEDUPE_WINDOW_MS = 5000; // ignore duplicate identical events within 5s

function readConsent(): { ad_storage?: string } | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function getFbq(): ((...args: any[]) => void) | undefined {
  if (typeof window === 'undefined') return undefined;
  return (window as any).fbq as any | undefined;
}

let lastFired = new Map<string, number>();

function makeKey(eventName: MetaEventName, params?: Record<string, any>) {
  try {
    return `${eventName}:${JSON.stringify(params ?? {})}`;
  } catch {
    return eventName;
  }
}

async function waitForFbq(timeout = 5000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (getFbq()) return getFbq();
    // small delay
    // eslint-disable-next-line no-await-in-loop
    await new Promise((r) => setTimeout(r, 50));
  }
  return undefined;
}

export async function trackEvent(eventName: MetaEventName, params?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  const consent = readConsent();
  if (!consent || consent.ad_storage !== 'granted') return; // respect consent

  const key = makeKey(eventName, params);
  const now = Date.now();
  const last = lastFired.get(key) ?? 0;
  if (now - last < DEDUPE_WINDOW_MS) return; // dedupe quick repeats
  lastFired.set(key, now);

  const fbq = await waitForFbq();
  if (!fbq) return;

  try {
    fbq('track', eventName, params ?? {});
  } catch (e) {
    // swallow errors to avoid breaking UI
    // optional: console.debug('fbq track error', e);
  }
}

export const trackLead = (params?: Record<string, any>) => trackEvent('Lead', params);
export const trackContact = (params?: Record<string, any>) => trackEvent('Contact', params);
export const trackSchedule = (params?: Record<string, any>) => trackEvent('Schedule', params);
export const trackFormSubmit = (params?: Record<string, any>) => trackEvent('Form Submit', params);
export const trackWhatsAppClick = (params?: Record<string, any>) => trackEvent('WhatsApp Click', params);
export const trackPhoneCallClick = (params?: Record<string, any>) => trackEvent('Phone Call Click', params);

export function isPixelLoaded() {
  return !!getFbq();
}

export default {
  trackEvent,
  trackLead,
  trackContact,
  trackSchedule,
  trackFormSubmit,
  trackWhatsAppClick,
  trackPhoneCallClick,
  isPixelLoaded,
};
