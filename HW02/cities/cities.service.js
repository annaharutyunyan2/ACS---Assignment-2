const citiesRepository = require('./cities.repository');

module.exports = {
    async getCityByZipCode(zipCode){
        const city = await citiesRepository.getCityDataByZipCode(zipCode);

        if (!city) {
            throw new NotFoundError(`No cities found!`);
        }

        return city;
    }
}