const express = require('express')
const { covidController,StateWiseCovidDataController } =require('../controllers/index')
router  = express.Router()
router.get('/covidData',covidController)
router.get('/StateWiseCovidData',StateWiseCovidDataController)
module.exports =router