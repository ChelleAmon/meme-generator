export const apiService = ({
    baseUrl: location.origin.includes('localhost') ? 'http://localhost:3000/api/' : '' + '/api/',

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

    save: function(url, data){
        return fetch(this.baseUrl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
        })
        .then(res => res.json())
    },

    edit: function(url, data){
        return fetch(this.baseUrl + url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
        })
        .then(res => res.json())
    }
});

