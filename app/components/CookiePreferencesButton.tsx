'use client';

import { useCallback } from 'react';

export function CookiePreferencesButton() {
  const open = useCallback(() => {
    window.dispatchEvent(new CustomEvent('av:consent:open'));
  }, []);

  return (
    <button onClick={open} className="rounded px-3 py-2 text-sm font-medium border border-outline-variant hover:bg-surface-container-low">
      Cookie Preferences
    </button>
  );
}

export default CookiePreferencesButton;
