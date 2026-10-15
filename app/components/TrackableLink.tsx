"use client";

import React from 'react';
import Link from 'next/link';
import {
  trackContact,
  trackSchedule,
  trackLead,
  trackCustom,
  type MetaEventParams,
} from '../lib/metaPixel';

type TrackAction = 'contact' | 'schedule' | 'lead' | 'form' | 'whatsapp' | 'phone' | 'email' | 'download' | 'outbound';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  action?: TrackAction;
  params?: MetaEventParams;
};

export default function TrackableLink({ action, params, children, href, onClick, ...rest }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
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
          trackCustom('FormStart', params);
          break;
        case 'whatsapp':
          trackContact({ ...(params || {}), method: 'whatsapp' });
          break;
        case 'phone':
          trackContact({ ...(params || {}), method: 'phone' });
          break;
        case 'email':
          trackContact({ ...(params || {}), method: 'email' });
          break;
        case 'download':
          trackCustom('BrochureDownload', params);
          break;
        case 'outbound':
          trackCustom('OutboundClick', params);
          break;
        default:
          break;
      }
    } catch {}
  };

  // If it's an internal link, let Next Link handle it
  const isInternal = href.startsWith('/') && !rest.target;

  if (isInternal) {
    return (
      <Link href={href} {...rest} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
