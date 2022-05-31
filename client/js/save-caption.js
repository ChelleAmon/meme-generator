import { apiService as api } from "../api/api.service.js";

export const saveCaption = (tText,bText) => {
    api.save(`create-caption`,{topText: tText, bottomText: bText}
    ).then(()=> {
        console.log('caption saved'+ tText + bText)
    }).catch(() => console.error('caption not saved, please try again'))

}