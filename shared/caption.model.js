export class Caption{
    topText;
    bottomText;
    _id;
    
    constructor(_id, topText, bottomText){
        this.topText = topText;
        this.bottomText = bottomText;
        this._id = _id;
    }
}