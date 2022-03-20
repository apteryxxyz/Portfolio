import { ShortenedURL } from 'db';

export default function getShortenedURL(where) {
    return ShortenedURL.findOne(where);
}
