'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';
import { triggerPageView } from '@/utilities/google-services';

/**
 * A component that adds Google Analytics to the page.
 */
export function GoogleAnalytics() {
  if (
    // Enabling Google Analytics is optional
    !process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID ||
    // No point in loading Google Analytics outside of production
    process.env.NODE_ENV !== 'production'
  )
    return null;

  const measurementId = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Trigger a page view when the pathname or search params change
  useEffect(() => {
    triggerPageView(pathname + searchParams.toString());
  }, [pathname, searchParams, measurementId]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
