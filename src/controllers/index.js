const covidService = require("../services")
const { callServices } = require('./callServices')

const covidController = async(req,res)=>{
    callServices(covidService,req,res)
}



module.exports = {
    covidController
}