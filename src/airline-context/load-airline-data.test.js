import {
    readFileSync
} from 'fs'
import loadAirlineData from './load-airline-data'

describe('loadAirlineData', () => {
    it('should provide airline-savety.csv as json promise', async () => {
        const csvContent = readFileSync(__dirname + '/../../public/airline-safety.csv', 'utf8');
        const rows = csvContent.split('\r')
        const labels = rows[0].split(',')
        fetch.mockResponseOnce(csvContent)

        const data = await loadAirlineData();
        expect(data.length).toEqual(rows.length - 1)
        data.forEach((airline) => {
            expect(Object.keys(airline)).toEqual(labels)
        })
    })
})