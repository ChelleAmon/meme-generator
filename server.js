import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { CaptionModel } from "./server/caption.schema.js";

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

// create new caption and save it to database
app.post('/create-caption', function(req, res) {
    const {topText, bottomText} = req.body;
    const new_caption = new CaptionModel({
        topText,
        bottomText
    });
    new_caption
    .save()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
});

app.get('/', function(req,res) {
    res.json({message: 'test'})
});

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
