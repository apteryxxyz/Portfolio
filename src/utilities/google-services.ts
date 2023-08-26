/**
 * Trigger a Google Analytics page view event,
 * @param pathname The page path.
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
export function triggerPageView(pathname: string) {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID) return;

  window.gtag(
    'config', //
    process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID,
    { page_path: pathname },
  );
}

/**
 * Trigger a Google Analytics event.
 * @param name The event name.
 * @param params The event parameters.
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
export function emitEvent(name: string, params: Record<string, unknown>) {
  window.gtag('event', name, params);
}
