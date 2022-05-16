export class Caption{
    topText = string;
    bottomText = string;
    _id = string;

    constructor(_id, topText, bottomText){
        this.topText = topText;
        this.bottomText = bottomText;
        this._id = _id;
    }
}