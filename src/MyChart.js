import React, { useContext } from 'react'
import { Chart } from 'react-charts'
import AirlineContext from './airline-context'

export default function MyChart({ }) {

    const [airlineSafety] = useContext(AirlineContext)
    const avail_seat_km_per_week = airlineSafety
        .map((airlineData) => airlineData.avail_seat_km_per_week)
        .map((airlineData) => parseInt(airlineData, 10))
        .sort((a, b) => a - b)
        .reduce((result, value) => {
            const category = Math.floor(value/100000000)
            console.log('$', value, category, result[category])
            result[category] += 1;
            return result;
        }, [...Array(80)].map(() => 0))
        .map((value, index) => [index, value])
    
    console.log('##########', avail_seat_km_per_week)
    const mean = (array) => array.reduce((sum, val) => {return sum + val}, 0)
    console.log('0000000 ', mean(avail_seat_km_per_week))
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: avail_seat_km_per_week
            },
            {
                label: 'mean',
                data: [
                    [50, 10]
                ]
            }
        ],
        [avail_seat_km_per_week]
    )

    const series = React.useMemo(
        () => {
            return {
                type: 'bar'
            }
        }, []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    )

    const lineChart = (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
            style={{
                width: '800px',
                height: '600px',
            }}
        >
            <Chart data={data} series={series} axes={axes} />
        </div>
    )
    return lineChart
}