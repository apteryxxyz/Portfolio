import mongoose from 'mongoose';

function generateCode() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let code = '';
    for (let i = 0; i < 5; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}

const schema = new mongoose.Schema({
    target: { type: String, required: true },
    code: { type: String, unique: true, default: generateCode },
    clicks: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

const PreMade = mongoose.models.ShortenedURL;
export const ShortenedURL = PreMade || mongoose.model('ShortenedURL', schema);