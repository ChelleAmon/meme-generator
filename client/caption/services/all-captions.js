import { apiService as api} from "../../api/api.service.js";

function displayAllCaptions(cb){
    api.get('captions').then(captions => {
        captions.forEach(caption => {
            const table = document.getElementById('caption-table')
            const rowCaption = document.createElement('tr')
            const cellTopText = document.createElement('td')
            const cellBottomText = document.createElement('td')
            const cellButtons = document.createElement('td')
        
            const editButton = document.createElement('button')
            const deleteButton = document.createElement('button')
        
            editButton.innerHTML = "Edit"
            deleteButton.innerHTML = "Delete"

            deleteButton.addEventListener('click', () => {
                
                //callback
                cb(caption._id)
            })
        
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

}


export default displayAllCaptions







