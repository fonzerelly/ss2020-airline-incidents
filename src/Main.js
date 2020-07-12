import React,  {useEffect, useState} from 'react'
import { AirlineSafetyContext } from "./airline-context"
import loadAirlineData from './airline-context/load-airline-data'
import App from './App'

export default function Main() {
    const [airlineData, setAirlineData] = useState([])

    useEffect(() => {
        loadAirlineData()
            .then((json) => {
                setAirlineData(json)
            })
            .catch((err) => {
                console.error('Error ' + err);
            })
    })
    return (
        <AirlineSafetyContext.Provider value={[airlineData]}>
            <App/>
        </AirlineSafetyContext.Provider>
    )
}