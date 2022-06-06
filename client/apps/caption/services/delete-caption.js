import { apiService as api } from "../../services/api.service.js";

const removeCaption = (id) => { 
    api.delete(`delete-caption/${id}`).then(()=> {
       console.log('deleted')
    }).catch(() => console.error("There is an error on the server! Please try again"))
}


export { removeCaption }

