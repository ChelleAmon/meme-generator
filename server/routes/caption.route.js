import express from 'express';
import { CaptionModel } from '../schemas/caption.schema.js';

export const captionRouter = express.Router();

captionRouter.get('/captions', function(req, res) {
    CaptionModel
    .find()
    .then(data => {
        res.json(data)
    })
    .catch(err => res.status(500).json(err));
});

captionRouter.post('/create-caption', function(req, res) {
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


captionRouter.put('/edit-caption/:id', (req,res) => {
    const _id = req.params.id
    const { topText, bottomText } = req.body;

    CaptionModel.findOneAndUpdate(
        {_id: _id}, 
        {$set: {topText: topText, bottomText: bottomText}},
        {new: true}
    )
    .then (data => res.json(data))
    .catch(err => res.status(500).json(err))
})


captionRouter.delete('/delete-caption/:id', (req,res) => {
    const id = req.params.id;

    CaptionModel.findOneAndRemove({_id: id})
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))

})


captionRouter.get('/random-caption', (req,res) => {
    CaptionModel.aggregate([
        {$sample: { 
            size: 1 // grabs how many documents we will get 
        }}
    ])
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})


//Another way to get random document(caption) from db

// captionRouter.get('/random-caption', (req,res) => {
//     CaptionModel.count().exec(function(err, count){
//         let random = Math.floor(Math.random() * count);

//         CaptionModel.findOne().skip(random).exec()
//         .then(data => res.json(data))
//         .catch(err => res.status(500).json(err))
//     })
// })
