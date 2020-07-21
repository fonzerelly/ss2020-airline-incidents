import parse from "csv-parse"

export function createAxes (){
    return [
        { primary: true, type: 'linear', position: 'bottom' },
        { primary: false, type: 'linear', position: 'left' }
    ]
}

export function createSeries() {
    return {
        type: 'bar'
    }
}



export function createAirlineSeatKmPerWeekData(label, rawData) {
    const data = extractAirlineSeatKmPerWeekData(rawData)
        .map((value, index) => {
            return [index, value]
        })
    return [{
        label,
        data
    }]
}

export function extractAirlineSeatKmPerWeekData(rawData) {
    return rawData ? rawData.map((entry) => {
        return entry.avail_seat_km_per_week
    }).map((numAsString) => {
        return parseInt(numAsString, 10)
    }) : []
}
