import * as rootConfig from "./server/configs/root.config.js"
import * as dbConfig from './server/configs/db.config.js'
import { CaptionModel } from "./server/schemas/caption.schema.js";

const port = 3000;
const app = rootConfig.app;


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

app.get('/', function(req,res) {
    res.json({message: 'test'})
});

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
