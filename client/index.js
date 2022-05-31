import { saveCaption } from "./js/save-caption.js";

let memeFile = document.getElementById('uploadMeme')
let topTextInput = document.getElementById('topText')
let botTextInput = document.getElementById('botText')
const canvas = document.getElementById('Canvas')
const button = document.getElementById('btn')


const maxHeight = 400;
const maxWidth = 800;
let imgValue;

let image;
memeFile.addEventListener('change', () => {
    const imageDataURL = URL.createObjectURL(memeFile.files[0])
    image = new Image();
    image.src = imageDataURL;

    if (canvas.getContext('2d')) {
        const loadImage = () => {
            const ctx = canvas.getContext('2d');
            ctx.beginPath();

            // establish image size
            const width = image.width;
            const height = image.height;
            const yOffSet = maxHeight / 7;
            let w;
            let h;

            // Resize image within max bounds
            if (width > maxWidth) {
                imgValue = width / maxWidth;
                w = width/imgValue;
                h = height/imgValue;
            }
             else if (height > maxHeight){
                imgValue = height / maxHeight;
                w = width/imgValue;
                h = height/imgValue;
            }
            else{
                w = width;
                h = height;
            }


            // load the canvas background
            canvas.width = w;
            canvas.height = h;

            console.log(canvas.width);
            ctx.drawImage(image, 0, 0, w, h);

            // styling the meme text
            ctx.font = 'Bold 40px Sans-serif';
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';

            // adding the top meme text
            ctx.textBaseline = 'Top';
            ctx.fillText(topTextInput.value, w / 3, yOffSet);
            ctx.strokeText(topTextInput.value, w / 3, yOffSet);

            // adding the bottom text
            ctx.textBaseline = 'Bottom';
            ctx.fillText(botTextInput.value, w / 3, h - yOffSet);
            ctx.strokeText(botTextInput.value, w / 3, h - yOffSet);
        }

        button.addEventListener('click', loadImage);

    } else {
        alert('Your browser does not support this image format');
    }


})

const saveButton = document.getElementById('saving');


saveButton.addEventListener('click', () => {
    saveCaption(topTextInput.value, botTextInput.value)
})
