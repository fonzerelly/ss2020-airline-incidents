import { readFileSync } from 'fs'
import React, { useContext, act } from 'react'
import { render } from '@testing-library/react'
import * as contextUnderTest from './'

describe('airline-context', () => {
    let loadAirlineData, AirlineSafetyContext, AirlineSafetyProvider
    beforeEach(() => {
        loadAirlineData = contextUnderTest.loadAirlineData
        AirlineSafetyContext = contextUnderTest.AirlineSafetyContext
        AirlineSafetyProvider = contextUnderTest.AirlineSafetyProvider
    })
    describe('loadAirlineData', () => {
        
        it('should provide airline-savety.csv as json promise', async () => {
            const csvContent = readFileSync(__dirname +'/../../public/airline-safety.csv', 'utf8');
            const rows = csvContent.split('\r')
            const labels = rows[0].split(',')
            fetch.mockResponseOnce(csvContent)

            const { loadAirlineData } = contextUnderTest 
            const data = await loadAirlineData();
            expect(data.length).toEqual(rows.length-1)
            data.forEach((airline) => {
                expect(Object.keys(airline)).toEqual(labels)
            })
        })
    })

    describe('AirlineSafetyProvider', () => {
        it('should render its children', () => {
            const tree = (
                <AirlineSafetyProvider>
                    <h1>TestValue</h1>
                </AirlineSafetyProvider>
            )
            const { getByText } = render(tree);
            expect(getByText("TestValue")).toBeDefined();
        })
    })
})