import { initMongoDB } from './db/initMongoConnections.js';
import { startServer } from './server.js';

const bootstrap = async () => {
    await initMongoDB();
    startServer();
};

bootstrap();
