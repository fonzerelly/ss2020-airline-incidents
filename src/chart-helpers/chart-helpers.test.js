import { createAxes, createSeries, createAirlineSeatKmPerWeekData } from '.'
describe('chart-helpers', () => {
    describe('createAxes', () => {
        it('should return config for Axes', () => {
            const expectedConfig = [
                { primary: true, type: 'linear', position: 'bottom' },
                { primary: false, type: 'linear', position: 'left' }
            ]
            expect(createAxes()).toEqual(expectedConfig)
        })
    })
    describe('createSeries', () => {
        it('should return config for series', () => {
            const expectedSeries = {
                type: 'bar'
            }
            expect(createSeries()).toEqual(expectedSeries)
        })
    })

    describe('createAirlineSeatKmPerWeekData', () => {
        it('should create proper structure for reactcharts', () => {
            const result = createAirlineSeatKmPerWeekData('Label', [])[0]
            expect(result.label).toEqual('Label')
            expect(result.data).toEqual([])
        })

        it('should extract airlineSeatKmPerWeek as numbers', () => {
            const input = [
                {
                    airline: "Aer Lingus",
                    avail_seat_km_per_week: "320906734",
                    fatal_accidents_00_14: "0",
                    fatal_accidents_85_99: "0",
                    fatalities_00_14: "0",
                    fatalities_85_99: "0",
                    incidents_00_14: "0",
                    incidents_85_99: "2"
                }
            ]
            expect(createAirlineSeatKmPerWeekData('Label', input)[0].data[0]).toEqual([0,320906734])
        })
    })
})