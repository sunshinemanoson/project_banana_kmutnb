const axios = require('axios');

const url = 'http://localhost:8000/predict';

const data = new URLSearchParams();
data.append('Weight', '150');

axios.post(url, data, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error);
});
