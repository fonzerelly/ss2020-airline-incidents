import React, { useContext } from 'react'
import { Bar } from 'react-chartjs-2'
import {AirlineSafetyContext} from './airline-context'
import {extractAirlineSeatKmPerWeekData} from './chart-helpers'

export default function ChartJsExample () {
    const [airlineSafetyData] = useContext(AirlineSafetyContext)
    const labels = (airlineSafetyData!== undefined) ? airlineSafetyData.map((entry) => entry.airline) : []
    const data = {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: extractAirlineSeatKmPerWeekData(airlineSafetyData),
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
            
            borderColor: 
                'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    }
    return (<Bar 
        data={data}
        width={800}
        height={300}
        options={{ maintainAspectRatio: false }}
    ></Bar>)
}