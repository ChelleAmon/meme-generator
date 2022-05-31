export const apiService = ({
    baseUrl: 'http://localhost:3000/',
    get: function(url) {
        return fetch(this.baseUrl + url).then(res => res.json());
    },

    delete: function(url){
        return fetch(this.baseUrl + url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => window.location.reload())
    },

    save: function(url){
        return fetch(this.baseUrl + url, {
            method: 'SAVE'
        })
        .then(res => res.json())
        .then(() => window.location.reload())
    }
});