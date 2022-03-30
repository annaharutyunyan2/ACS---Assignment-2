const {getCityByZipCode} = require ('../cities/cities.service');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

const expect = chai.expect;

describe('Testing cities.service file', function() {
    describe('testing getCityByZipCode function', function() {
        it('Should return the city given a zipCode', function () {
            getCityByZipCode(90210).should.eventually.equal("{ 'post code': '90210', country: 'United States', 'country abbreviation': 'US', places: [ { 'place name': 'Beverly Hills', longitude: '-118.4065', state: 'California', 'state abbreviation': 'CA', latitude: '34.0901' } ] }");
        });

        it("returns an error when the zipCode is not valid", function(){
            return expect(
                getCityByZipCode(902100)
            ).to.eventually.be.rejectedWith("NotFoundError is not defined");
        })
    });
});