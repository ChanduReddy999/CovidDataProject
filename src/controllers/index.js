const covidService = require("../services/index")
const { callServices } = require('./callServices')

const covidController = async(req,res)=>{
    callServices(covidService,req,res)
}



module.exports = {
    covidController
}