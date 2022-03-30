const mockAxios = require('axios');
// import mockAxios from "axios";
// import { expect } from "chai";
const cityRepository = require('../cities/cities.repository');
// import getCityDataByZipCode from "../cities/cities.repository";

it("should get the data of a city given a zipCode", async () => {
    mockAxios.get.mockImplementationOnce(() => 
        Promise.resolve({
            data: {
                results: ["{ 'post code': '90210', country: 'United States', 'country abbreviation': 'US', places: [ { 'place name': 'Beverly Hills', longitude: '-118.4065', state: 'California', 'state abbreviation': 'CA', latitude: '34.0901' } ] }"]
            }
    }))
    const data = await cityRepository.getCityDataByZipCode(90210);
    expect(data).toEqual(["{ 'post code': '90210', country: 'United States', 'country abbreviation': 'US', places: [ { 'place name': 'Beverly Hills', longitude: '-118.4065', state: 'California', 'state abbreviation': 'CA', latitude: '34.0901' } ] }"])
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
        "https://api.zippopotam.us/us/90210", {
        params: {
            zipCode: this.zipCode
        }
        }
    )
})