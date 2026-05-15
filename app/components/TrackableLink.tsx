"use client";

import React from 'react';
import Link from 'next/link';
import {
  trackContact,
  trackSchedule,
  trackLead,
  trackFormSubmit,
  trackWhatsAppClick,
  trackPhoneCallClick,
} from '../lib/metaPixel';

type TrackAction = 'contact' | 'schedule' | 'lead' | 'form' | 'whatsapp' | 'phone';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  action?: TrackAction;
  params?: Record<string, any>;
};

export default function TrackableLink({ action, params, children, ...rest }: Props) {
  const handleClick = () => {
    try {
      if (!action) return;
      switch (action) {
        case 'contact':
          trackContact(params);
          break;
        case 'schedule':
          trackSchedule(params);
          break;
        case 'lead':
          trackLead(params);
          break;
        case 'form':
          trackFormSubmit(params);
          break;
        case 'whatsapp':
          trackContact({ ...(params || {}), method: 'whatsapp' });
          break;
        case 'phone':
          trackContact({ ...(params || {}), method: 'phone' });
          break;
        default:
          break;
      }
    } catch (e) {}
  };

  // If it's an internal link, let Next Link handle it
  const isInternal = rest.href && rest.href.startsWith('/') && !rest.target;

  if (isInternal) {
    return (
      <Link {...(rest as any)} href={rest.href} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
