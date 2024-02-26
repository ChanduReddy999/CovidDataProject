const express = require('express')
const { covidController } =require('../controllers/index')
router  = express.Router()
router.get('/covidData',covidController)
module.exports =router