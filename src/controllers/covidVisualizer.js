const covidVisualService = require("../services/covidVisualizer")
const { callServices } = require('./callServices')

const covidVisualDataController = async(req,res)=>{
    callServices(covidVisualService.covidVisualDataService,req,res)
}

const covidVisualCountryDataController = async(req,res)=>{
    callServices(covidVisualService.covidVisualCountryDataService,req,res)
}

const covidVaccineDataController = async(req,res)=>{
    callServices(covidVisualService.covidVaccineDataService,req,res)
}

const covidVaccineCountryDataController = async(req,res)=>{
    callServices(covidVisualService.covidVaccineCountryDataService,req,res)
}




module.exports = {
    covidVisualDataController,covidVisualCountryDataController, covidVaccineDataController, covidVaccineCountryDataController
}