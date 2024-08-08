const express = require('express')
const covidVisualController =require('../controllers/covidVisualizer')
router  = express.Router()


router.get('/covidvisualdata',covidVisualController.covidVisualDataController)
router.post('/covidvisualcountrydata',covidVisualController.covidVisualCountryDataController)
router.get('/covidvaccinedata',covidVisualController.covidVaccineDataController)
router.post('/covidvaccinecountrydata',covidVisualController.covidVaccineCountryDataController)


module.exports =router