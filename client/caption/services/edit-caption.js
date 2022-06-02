import { apiService as api } from "../../api/api.service.js";

const editCaption = (id, tText, bText) => {
    api.edit(`edit-caption/${id}`, { topText: tText, bottomText: bText }
    ).then(() => {
        console.log('caption saved' + tText + bText)
    }).catch(() => console.error('caption not saved, please try again'))

}


export { editCaption };