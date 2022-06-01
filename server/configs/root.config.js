import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());


const envConfig = {
    mongoUri: process.env.mongo_uri,
    localMongoUri: "mongodb://localhost:27017/memeGenerator",
}


export { app, envConfig};




