import React, { useContext, useMemo } from 'react'
import { Chart } from 'react-charts'

import { AirlineSafetyContext } from './airline-context'

export default function MyChart() {
    const [airlineSafetyData] = useContext(AirlineSafetyContext)
    const avail_seat_km_per_week = airlineSafetyData.map((data) => {
        return data.avail_seat_km_per_week
    }).map((numString) => {
        return parseInt(numString, 10)
    }).sort(
        (a, b) => { return a - b }
    )
    .reduce((result, value) => {
            const category = Math.floor(value / 100000000)
            console.log('$', value, category, result[category])
            result[category] += 1;
            return result;
        }, [...Array(80)].map(() => 0))

    const tuples = avail_seat_km_per_week.map((number, index) => {
        return [index, number]
    })

    console.log('##########', tuples)

    const data = useMemo(
        () => [
            {
                label: 'Series 1',
                data: tuples
            }
        ],
        [tuples]
    )

    const axes = useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { primary: false, type: 'linear', position: 'left' }
        ],
        []
    )

    const series = useMemo(
        () => ({
            type: 'bar'
        }),
        []
    )

    const lineChart = (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
            style={{
                width: '800px',
                height: '300px'
            }}
        >
            <Chart data={data} series={series} axes={axes} />
        </div>
    )
    return lineChart;
}