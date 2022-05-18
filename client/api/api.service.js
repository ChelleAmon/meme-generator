export const apiService = ({
    baseUrl: 'http://localhost:3000/',
    get: function(url) {
        return fetch(this.baseUrl + url).then(res => res.json());
    }
});