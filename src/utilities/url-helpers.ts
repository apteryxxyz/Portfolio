/**
 * Take a pathname and create a full URL object using the NEXT_PUBLIC_APP_URL environment variable.
 * @param pathname The pathname to use.
 * @returns An URL object.
 */
export function absoluteUrl(pathname = '/') {
  return new URL(pathname, process.env.NEXT_PUBLIC_APP_URL);
}
