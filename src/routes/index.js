const express = require('express')
const { covidController,stateWiseCovidDataController,dayWiseCovidTestsController } =require('../controllers/index')
router  = express.Router()
router.get('/covidData',covidController)
router.get('/stateWiseCovidData',stateWiseCovidDataController)
router.get('/dayWiseCovidTests',dayWiseCovidTestsController)
module.exports =router