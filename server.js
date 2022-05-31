import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import { CaptionModel } from "./server/caption.schema.js";

dotenv.config()
const port = 3000;
const app = express();
// const mongoUri = "mongodb://localhost:27017/memeGenerator";
const mongoUri = process.env.mongo_uri || "mongodb://localhost:27017/memeGenerator"

app.use(express.json());
app.use(cors());

mongoose.connect(mongoUri).then(() => {
    console.log("connected to DB successfully");
}).catch((err) => {
    console.log("Failed to connect to DB", err);
});

// get all captions from database
app.get('/captions', function(req, res) {
    CaptionModel
    .find()
    .then(data => {
        res.json(data)
    })
    .catch(err => res.status(500).json(err));
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


app.put('/edit-caption/:id', (req,res) => {
    const _id = req.params.id
    const { topText, bottomText } = req.body;

    CaptionModel.findOneAndUpdate(
        {_id: _id}, 
        {$set: {topText: topText, bottomText: bottomText}},
        {new: true}
    )
    .then (res => res.json())
    .catch(err => res.status(500).json(err))
})

app.get('/', function(req,res) {
    res.json({message: 'test'})
});

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
