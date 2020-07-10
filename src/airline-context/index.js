import React, { createContext, useEffect, useState } from 'react'
import parse from 'csv-parse/lib/sync'

export function loadAirlineData () {
    return fetch('/airline-safety.csv')
        .then((response) => {
            return response.text()
        })
        .then((text) => {
            return parse(text, {
                columns: true
            })
        })
}

export const AirlineSafetyContext = createContext([])

export function AirlineSafetyProvider ({children}) {
    const [airlineSafety, setAirlineSafety] = useState([]);
    useEffect(() => {
        if (airlineSafety.length === 0) {
            loadAirlineData().then((json) => {
                console.log('loading...')
                setAirlineSafety(json)
            })
        }
    })
    return (
        <AirlineSafetyContext.Provider value={[airlineSafety]}>
            { children }
        </AirlineSafetyContext.Provider>
    )
}