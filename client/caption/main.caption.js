//import functions from the other js files
import displayAllCaptions from "../caption/services/all-captions.js";
import  { removeCaption } from '../caption/services/delete-caption.js';


//passing a callback function named removeCaption
displayAllCaptions(removeCaption)