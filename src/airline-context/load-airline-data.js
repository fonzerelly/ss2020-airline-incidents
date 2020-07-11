import parse from 'csv-parse/lib/sync'

export default function loadAirlineData () {
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