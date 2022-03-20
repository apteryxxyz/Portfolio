import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export class Database {
    async connect() {
        if (mongoose.connections[0]._readyState > 0) return;
        const uri = await this.generateDatabaseUri();
        return this.connection = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => { console.info('Connected to MongoDB'); return this })
            .catch(error => console.error('Failed to connect: ', error));
    }

    async generateDatabaseUri() {
        if (process.env.NODE_ENV === 'development') {
            this.mongod = await MongoMemoryServer.create();
            return await this.mongod.getUri();
        } else {
            const {
                MONGODB_PROTOCOL: protocol,
                MONGODB_HOST: host,
                MONGODB_DATABASE: database
            } = process.env;
            return `${protocol}://${host}/${database}?retryWrites=true&w=majority`;
        }
    }
}
