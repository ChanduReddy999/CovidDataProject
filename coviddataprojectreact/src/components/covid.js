import React, { useEffect, useState } from 'react'

const Covid = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getCovidData();
    }, [])

    const getCovidData = async () => {
        try {
            // const apiUrl = 'https://api.covid19india.org/data.json';

            // const data = await fetch(apiUrl, {
            //     mode: 'no-cors'
            // })
            const data = await fetch('https://api.covid19india.org/data.json');
            const finalData = await data.json();
            console.log("finalData", finalData.statewise[0]);
            setData(finalData.statewise[0])
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div>
                <div>
                    <h1>LIVE</h1>
                    <h2>Covid-19 Live Tracker</h2>
                </div>
                <div>
                    <ul>
                        <li>
                            <p>Our <span>Country</span></p>
                            <p>INDIA</p>
                        </li>
                        <li>
                            <p>Total <span>Recovered</span></p>
                            <p>{data.recoverd}</p>
                        </li>
                        <li>
                            <p>Total <span>Confirmed</span></p>
                            <p>{data.confirmed}</p>
                        </li>
                        <li>
                            <p>Total <span>Deaths</span></p>
                            <p>{data.deaths}</p>
                        </li>
                        <li>
                            <p>Total <span>Active</span></p>
                            <p>{data.active}</p>
                        </li>
                        <li>
                            <p>Last <span>Updated</span></p>
                            <p>{data.lastupdatedtime}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Covid
