import { createContext } from 'react'

const AirlineSafetyContext = createContext([[], () => {throw new Error ('Context not yet defined')}])

export default AirlineSafetyContext