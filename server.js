import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const port = 3000;
const app = express();
const mongoUri = "mongodb://localhost:27017/memeGenerator";

app.use(express.json());
app.use(cors());

mongoose.connect(mongoUri).then(() => {
    console.log("connected to DB successfully");
}).catch((err) => {
    console.log("Failed to connect to DB", err);
});

app.get('/', function(req,res) {
    res.json({message: 'test'})
});

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
