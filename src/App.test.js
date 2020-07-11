import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';
import AirlineSafetyContext from './airline-context';
import { readFileSync } from 'fs';
import parse from 'csv-parse/lib/sync'

describe('App', () => {

  it('should render as always without data', async () => {
      const tree = (
        <AirlineSafetyContext.Provider value={[[]]}>
        <App />
      </AirlineSafetyContext.Provider>
    )
    const { container } = render(tree);
    expect(container).toMatchSnapshot();
  });


  it('should render as always with data', async () => {
    const rawCsv = readFileSync(__dirname + '/../public/airline-safety.csv', 'utf8');
    const json = parse(rawCsv, {columns: true});
    const tree = (
      <AirlineSafetyContext.Provider value={[json]}>
        <App />
      </AirlineSafetyContext.Provider>
    )
    const { container } = render(tree);
    expect(container).toMatchSnapshot();
  });
})
