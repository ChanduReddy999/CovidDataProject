const axios = require('axios')
const covidService =async()=>{
    try {
        const covidData = await axios.get('https://api.covid19india.org/data.json')
        console.log("covidData",covidData.data.statewise[0]);
        // covidData.data.statewise[0] gives all states overall sum, if necessary make the changes as regarding
        return {status: 200, message: "success", data:covidData.data.statewise[0]}
    } catch (error) {
        return {status: 300, message: "error", data:[]}
    }
}


module.exports = covidService
