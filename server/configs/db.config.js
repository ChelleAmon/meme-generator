import mongoose from 'mongoose';
import { envConfig } from '../configs/root.config.js';

const mongoUri = envConfig.mongoUri || envConfig.localMongoUri

export default mongoose.connect(mongoUri).then(() => {
    console.log("connected to DB successfully");
}).catch((err) => {
    console.log("Failed to connect to DB", err);
});


