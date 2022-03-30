const express = require('express'); 
const citiesController = require('./cities/cities.controller');
const app = express();          

app.use('/cities', citiesController);   

const port = 3000; 

app.listen(port, () => {console.log('port is running')});
