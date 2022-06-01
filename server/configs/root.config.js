import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const envConfig = {
    mongoUri: process.env.mongo_uri,
    localMongoUri: process.env.local_mongo_uri,
}

const __dirname = path.resolve();
const clientPath = path.join(__dirname, '/client')
const filePath = path.join(clientPath, '/index.html')


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static(clientPath))


export { app, envConfig, filePath };




