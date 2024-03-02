const {covidService,StateWiseCovidDataService} = require("../services/index")
const { callServices } = require('./callServices')

const covidController = async(req,res)=>{
    callServices(covidService,req,res)
}

const StateWiseCovidDataController = async(req,res)=>{
    callServices(StateWiseCovidDataService,req,res)
}



module.exports = {
    covidController,StateWiseCovidDataController
}