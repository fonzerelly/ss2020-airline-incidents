import React, {useContext} from 'react'
import AirlineSafetyContext from './airline-context'

export default function Dummy () {
  const [airlineSafetyData] = useContext(AirlineSafetyContext)
  return (<h1>First Airline: { ( airlineSafetyData.length) > 0 ? JSON.stringify(airlineSafetyData.slice(0,1)[0].airline) : "none" }</h1>)
}