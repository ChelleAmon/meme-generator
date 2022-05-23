import mongoose from 'mongoose';

const CaptionSchema = mongoose.Schema({
    topText: {type: String},
    bottomText: {type: String}
}) 


export const CaptionModel = mongoose.model('Caption', CaptionSchema)