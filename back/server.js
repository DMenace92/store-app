const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const cors = require('cors')

// var routes_setter = require('./config/routes.js');
app.use(cors())
// routes_setter(app);
app.listen(9000);
console.log('its over 9000!!!')
