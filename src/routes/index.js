const express = require('express')
const { covidController,stateWiseCovidDataController,dayWiseCovidTestsController } =require('../controllers/index')
router  = express.Router()
router.get('/covidData',covidController)
router.get('/stateWiseCovidData',stateWiseCovidDataController)
router.post('/dayWiseCovidTests',dayWiseCovidTestsController)
module.exports =router