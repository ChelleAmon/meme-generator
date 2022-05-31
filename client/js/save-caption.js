import { apiService as api } from "../api/api.service";

export const saveCaption = (tText,bText) => {
    api.save(`save-caption/${id}`).then(()=> {
        console.log('caption saved')
    }).catch(() => console.error('caption not saved, please try again'))

}