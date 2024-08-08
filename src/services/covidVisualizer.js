const axios = require('axios');


const covidVisualDataService = async () => {
    try {
        const covidVisualData = await axios.get('https://covidvisualizer.com/api')
        console.log("all",covidVisualData.data.worldwide);
        return { status: 200, message: "success", data: covidVisualData.data.worldwide }
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
        const covidVaccineData = await axios.get('https://vaccinevisualizer.com/api')
        console.log("allvaccines",covidVaccineData.data.worldwide);
        return { status: 200, message: "success", data: covidVaccineData.data.worldwide }
    } catch (error) {
        return { status: 300, message: "error", data: [] }
    }
}

const covidVaccineCountryDataService = async (req,res) => {
    try {
        const countryName = req.body.countryName
        console.log("countryName",countryName);
        
        const covidVaccineData = await axios.get('https://vaccinevisualizer.com/api')
        // console.log("allvaccines",covidVaccineData.data.countries);

        const countries = covidVaccineData.data.countries;

        const filteredCountry = Object.values(countries).find(country => 
            country.name.toLowerCase() === countryName.toLowerCase()
        );

        const finalVaccineData = filteredCountry || `Country with name ${countryName} not found`

        return { status: 200, message: "success", data: finalVaccineData }

    } catch (error) {
        return { status: 300, message: "error", data: [] }
    }
}

module.exports = { covidVisualDataService, covidVisualCountryDataService, covidVaccineDataService,covidVaccineCountryDataService }
