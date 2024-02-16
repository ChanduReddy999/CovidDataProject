const express = require('express')
const { covidController } =require('../controllers')
router  = express.Router()
router.get('/covidData',covidController)
module.exports =router