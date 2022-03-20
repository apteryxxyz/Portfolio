import { ShortenedURL } from 'db';

export default async function clickShort(where) {
    const shortenedURL = await ShortenedURL.findOne(where);
    if (!shortenedURL) return;
    shortenedURL.clicks += 1;
    await shortenedURL.save();
    return shortenedURL;
}
