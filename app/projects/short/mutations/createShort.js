import { ShortenedURL } from 'db';

export const middleware = [
    async function (req, res, next) {
        const isValidMethod = req.method === 'POST';
        if (!isValidMethod) return res.status(405).json({ error: 'Method not allowed' });
        next();
    }
];

export default async function createShortenedURL({ target, code, password }) {
    const isValidPassword = password === process.env.ADMIN_PASSWORD;
    if (!isValidPassword) return { error: 'Invalid password' };
    const shortenedURL = await ShortenedURL.findOne({ code });
    if (shortenedURL) return { error: 'Shortened URL already exists' };
    const newShortenedURL = await ShortenedURL.create({ target, code });
    return newShortenedURL;
}