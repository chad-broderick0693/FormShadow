import axios from 'axios';

export class ApiService {
    static get(url, config) {
        return axios
            .get(url, config)
            .then(({ data }) => {
                return data;
            })
            .catch(error => {
                throw Error(`API GET (${url}) returned an error: ${error}`);
            })
    }
}