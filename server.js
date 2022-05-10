import express from "express";
import mongoose from "mongoose";

const port = 3000;
const app = express();
const mongoUri = "mongodb://localhost:27017/memeGenerator";

app.use(express.json());

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
