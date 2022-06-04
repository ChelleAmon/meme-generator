import { apiService as api  } from '../../api/api.service.js';
import { updateMemeCanvas } from '../../meme/services/create-meme.js';

function randomize(){
   api.get('random-caption')
   .then((caption) => {

      saveCaptionToStorage(caption)
      updateCaptionFromStorage()
      updateMemeCanvas()
   })
   .catch((err) => console.log("There is an error", err))
}


function saveCaptionToStorage(caption){
   const topText = caption[0]["topText"]
   const bottomText = caption[0]["bottomText"]

   sessionStorage.setItem("topText", topText)
   sessionStorage.setItem("bottomText", bottomText)
}


function updateCaptionFromStorage(){
   const topTextInput = document.querySelector('#topText');
   const bottomTextInput = document.querySelector('#botText');

   topTextInput.value = sessionStorage.getItem("topText")
   bottomTextInput.value = sessionStorage.getItem("bottomText")
}


const randomBtn = document.querySelector('#randomBtn');

randomBtn.addEventListener('click', () => {
   randomize()
})
