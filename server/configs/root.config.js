import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const envConfig = {
    mongoUri: process.env.mongo_uri,
    localMongoUri: "mongodb://localhost:27017/memeGenerator",
}

const __dirname = path.resolve();
const clientPath = path.join(__dirname, '/client')


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static(clientPath))


export { app, envConfig };




