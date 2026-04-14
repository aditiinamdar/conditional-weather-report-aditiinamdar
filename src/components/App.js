import { useState } from 'react'

import WeatherDisplay from './WeatherDisplay'

function App() {
  const [weather]=useState({
    temperature: 25,
    conditions: 'Sunny',
  });
  return (
    <>
     <WeatherDisplay weather={weather}/>
    </>
  )
}

export default App
