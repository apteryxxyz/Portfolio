export { ShortenedURL } from './ShortenedURL';
import { Database } from './createDatabase';
const database = new Database();
export default database;
database.connect();