import { apiService as api} from "../api/api.service.js";
import { saveCaption } from "./save-caption.js";

api.get('captions').then(captions => {
    captions.forEach(caption => {
        const table = document. querySelector('#caption-table');
        const rowCaption = document.createElement('tr')
        const cellTopText = document.createElement('td')
        const cellBottomText = document.createElement('td')
        const cellButtons = document.createElement('td')
    
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')
    
    
        editButton.innerHTML = "Edit"
        deleteButton.innerHTML = "Delete"
    
    
        cellTopText.innerHTML =  `${caption.topText}`
        cellBottomText.innerHTML = `${caption.bottomText}`
    
    
        cellButtons.appendChild(editButton)
        cellButtons.appendChild(deleteButton)
    
    
        rowCaption.appendChild(cellTopText)
        rowCaption.appendChild(cellBottomText)
        rowCaption.appendChild(cellButtons)
    
        table.appendChild(rowCaption)
    
          
    
    })

})

const saveButton = document.getElementById('saving');
let topTextInput = document.getElementById('topText');
let botTextInput = document.getElementById('botText');

saveButton.addEventListener('click', () => {
    saveCaption(topTextInput, botTextInput)
})




