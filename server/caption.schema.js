import mongoose from 'mongoose';
import Caption from '../shared/caption.model.js';

const CaptionSchema = mongoose.Schema<Caption>({
    topText: {type: String, required: true},
    bottomText: {type: String, required: true}
}) 


export const CaptionModel = mongoose.model('Caption', CaptionSchema)