const axios = require('axios');

async function getCityDataByZipCode(zipCode) {
    axios.get(`https://api.zippopotam.us/us/90210`, {
        params: {
            zipCode: this.zipCode
        }
     })
     .then(response => console.log(response.data));
}


getCityDataByZipCode();

module.exports = {
    getCityDataByZipCode,
}