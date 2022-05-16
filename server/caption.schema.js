import mongoose from 'mongoose';
import Caption from '../shared/caption.model.js';

const CaptionSchema = mongoose.Schema<Caption>({
    topText: {type: String},
    bottomText: {type: String}
}) 


export const CaptionModel = mongoose.model('Caption', CaptionSchema)