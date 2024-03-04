const {covidService,stateWiseCovidDataService,dayWiseCovidTestsService} = require("../services/index")
const { callServices } = require('./callServices')

const covidController = async(req,res)=>{
    callServices(covidService,req,res)
}

const stateWiseCovidDataController = async(req,res)=>{
    callServices(stateWiseCovidDataService,req,res)
}

const dayWiseCovidTestsController = async(req,res)=>{
    callServices(dayWiseCovidTestsService,req,res)
}



module.exports = {
    covidController,stateWiseCovidDataController,dayWiseCovidTestsController
}