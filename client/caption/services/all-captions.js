import { apiService as api } from "../../api/api.service.js";

function displayAllCaptions(cb1, cb2) {
    api.get('captions').then(captions => {
        captions.forEach(caption => {
            const table = document.getElementById('caption-table')
            const rowCaption = document.createElement('tr')
            const cellTopText = document.createElement('td')
            cellTopText.setAttribute('contenteditable', 'false')
            const cellBottomText = document.createElement('td')
            cellBottomText.setAttribute('contenteditable', 'false')
            const cellButtons = document.createElement('td')

            const editButton = document.createElement('button')
            const deleteButton = document.createElement('button')

            editButton.innerHTML = "Edit"
            deleteButton.innerHTML = "Delete"

            editButton.className = "edit-btn"
            deleteButton.className = "delete-btn"

            deleteButton.addEventListener('click', () => {

                //callback
                cb1(caption._id)
            })

            cellTopText.innerHTML = `${caption.topText}`
            cellBottomText.innerHTML = `${caption.bottomText}`


            cellButtons.appendChild(editButton)
            cellButtons.appendChild(deleteButton)

            editButton.addEventListener('click', () => {
                if (editButton.innerHTML == 'Edit') {
                    cellTopText.setAttribute('contenteditable', 'true');
                    cellBottomText.setAttribute('contenteditable', 'true');
                    cellTopText.style.backgroundColor = 'yellow'
                    cellBottomText.style.backgroundColor = 'yellow'
                    editButton.innerHTML = 'Save'
                    editButton.style.background = 'Yellow'
                    console.log('Edit');
                }

                else if (editButton.innerHTML == 'Save') {
                    console.log('I Saved');
                    cellTopText.setAttribute('contenteditable', 'false');
                    cellBottomText.setAttribute('contenteditable', 'false');
                    cellTopText.style.backgroundColor = 'white'
                    cellBottomText.style.backgroundColor = 'white'
                    editButton.innerHTML = 'Edit'
                    editButton.style.background = 'Green'

                    cb2(caption._id, cellTopText.innerText, cellBottomText.innerText)
                }
                console.log('Done');

                

            })

            rowCaption.appendChild(cellTopText)
            rowCaption.appendChild(cellBottomText)
            rowCaption.appendChild(cellButtons)

            table.appendChild(rowCaption)
        })
    })

}


export default displayAllCaptions








