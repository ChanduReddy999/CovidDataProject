const axios = require('axios')
const covidService = async () => {
    try {
        const covidData = await axios.get('https://api.covid19india.org/data.json')
        // console.log("covidData",covidData.data.statewise[0]);
        // covidData.data.statewise[0] gives all states overall sum, if necessary make the changes as regarding
        return { status: 200, message: "success", data: covidData.data.statewise[0] }
    } catch (error) {
        return { status: 300, message: "error", data: [] }
    }
}

const stateWiseCovidDataService = async () => {
    try {
        const covidData = await axios.get('https://api.covid19india.org/data.json')
        // console.log("covidData",covidData.data.statewise);
        // covidData.data.statewise gives all states covid data, if necessary make the changes as regarding
        return { status: 200, message: "success", data: covidData.data.statewise }
    } catch (error) {
        return { status: 300, message: "error", data: [] }
    }
}


const dayWiseCovidTestsService = async (req,res) => {
    try {
        var desiredDate = req.body.desiredDate
        // desiredDate = '23/04/2021'                  // any date between covid period
        const covidData = await axios.get('https://api.covid19india.org/data.json');
        const finalData = covidData.data.tested;

        const filteredData = finalData.filter((key) => {
            // Check if testedasof matches the desired date
            return key.testedasof === desiredDate;
        });

        const finalResult = filteredData.map((key) => {
            const Result = {
                "over45years1stdose": key.over45years1stdose || 0,
                "over45years2nddose": key.over45years2nddose || 0,
                "over60years1stdose": key.over60years1stdose || 0,
                "over60years2nddose": key.over60years2nddose || 0,
                "positivecasesfromsamplesreported": key.positivecasesfromsamplesreported || '',
                "registration18-45years": key["registration18-45years"] || 0,
                "registrationabove45years": key.registrationabove45years || 0,
                "samplereportedtoday": key.samplereportedtoday || 0,
                "testedasof": key.testedasof || '',
                "totaldosesprovidedtostatesuts": key.totaldosesprovidedtostatesuts || 0,
                "totalindividualsregistered": key.totalindividualsregistered || 0,
                "totalindividualstested": key.totalindividualstested || '',
                "totalpositivecases": key.totalpositivecases || '',
                "totalrtpcrsamplescollectedicmrapplication": key.totalrtpcrsamplescollectedicmrapplication || 0,
                "totalsamplestested": key.totalsamplestested || 0,
                "totalvaccineconsumptionincludingwastage": key.totalvaccineconsumptionincludingwastage || 0,
                "updatetimestamp": key.updatetimestamp || '',
                "years1stdose": key.years1stdose || 0,
                "years2nddose": key.years2nddose || 0,
            };
            return Result;
        });

        return { status: 200, message: "success", data: finalResult };
    } catch (error) {
        return { status: 300, message: "error", data: [] };
    }
};


module.exports = { covidService, stateWiseCovidDataService, dayWiseCovidTestsService }
