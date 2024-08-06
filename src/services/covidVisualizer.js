const axios = require('axios');


const covidVisualDataService = async () => {
    try {
        const covidVisualData = await axios.get('https://covidvisualizer.com/api')
        console.log("all",covidVisualData.data);
        return { status: 200, message: "success", data: covidVisualData.data }
    } catch (error) {
        return { status: 300, message: "error", data: [] }
    }
}

const covidVisualCountryDataService = async (req,res) => {
    try {
        const countryCode = req.body.countryCode
        const covidVisualCountryData = await axios.get(`https://covidvisualizer.com/iso/${countryCode}`)
        console.log("coun",covidVisualCountryData.data);
        return { status: 200, message: "success", data: covidVisualCountryData.data }
    } catch (error) {
        return { status: 300, message: "error", data: [] }
    }
}

const covidVaccineDataService = async () => {
    try {
        const covidVisualData = await axios.get('https://vaccinevisualizer.com/api')
        console.log("allvaccines",covidVisualData.data);
        return { status: 200, message: "success", data: covidVisualData.data }
    } catch (error) {
        return { status: 300, message: "error", data: [] }
    }
}

module.exports = { covidVisualDataService, covidVisualCountryDataService, covidVaccineDataService }
