const covidService =async()=>{
    try {
        const covidData = await axios.get('https://api.covid19india.org/data.json')
        console.log("covidData",covidData?.statewise);
        return {status: 200, message: "success", data:covidData.statewise}
    } catch (error) {
        return {status: 300, message: "error", data:[]}
    }
}

module.exports = covidService
