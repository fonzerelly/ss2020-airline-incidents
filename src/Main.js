import React, { useEffect, useState } from 'react'
import AirlineSafetyContext from './airline-context'
import loadAirlineData from './airline-context/load-airline-data'
import App from './App'

export default function Main () {
    const [airlineSafety, setAirlineSafety] = useState([]);
    
    useEffect(() => {
        if (!airlineSafety || airlineSafety.length === 0) {
            loadAirlineData()
                .then((json) => {
                    console.log('loading...', json)
                    setAirlineSafety(json)
                })
                .catch((err) => {
                    console.error(`Error: ${err}`);
                })
        }
    })

    return (
        <AirlineSafetyContext.Provider value={[airlineSafety]}>
            <App/>
        </AirlineSafetyContext.Provider>
    )
}