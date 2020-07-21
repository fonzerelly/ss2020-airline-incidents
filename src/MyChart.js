import React, { useContext, useMemo } from 'react'
import { Chart } from 'react-charts'
import { createAxes, createSeries, createAirlineSeatKmPerWeekData, extractAirlineSeatKmPerWeekData } from './chart-helpers'
import { AirlineSafetyContext } from './airline-context'

export default function MyChart() {
    const [airlineSafetyData] = useContext(AirlineSafetyContext)

    const data = useMemo(
        () => createAirlineSeatKmPerWeekData('Series 1', airlineSafetyData),
        [airlineSafetyData]
    )

    const lineChart = (
        <div
            style={{
                width: '800px',
                height: '300px'
            }}
        >
            <Chart data={data} series={createSeries()} axes={createAxes()} />
        </div>
    )
    return lineChart;
}