const express = require('express');
const asyncHandler = require('express-async-handler');
const citiesService = require('./cities.service');

const route = express.Router();

route.get('cities/:zipCode/', asyncHandler(async (req, res, next) => {
    const index = req.params['zipCode'];
    const result = await citiesService.getCityByZipCode(index);
    res.send(result);
}))

module.exports = route;