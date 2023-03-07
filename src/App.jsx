import { useEffect, useState } from 'react'
import { parseISO, intervalToDuration } from 'date-fns'
import './App.css'

import snowman from './pictures/snowman.jpg'
import skiing from './pictures/skiing.jpg'
import winter from './pictures/winter.jpg'
import moresnow from './pictures/moresnow.jpg'
import snows from './pictures/snows.jpg'
import night from './pictures/night.jpg'
import winterplane from './pictures/winterPlane.jpg'
import plane from './pictures/planeToSummer.jpg'
import wintermore from './pictures/wintermore.jpg'
import sunflowers from './pictures/sunflowers.jpg'
import sunsand from './pictures/sunsand.jpg'
import summer from './pictures/summer.jpg'

function App() {
  const [
    toSummer, 
    setToSummer
  ] = useState({})
  
  useEffect(()=> {
    const intervalId =setInterval(() => {
      const summer = parseISO('2023-06-21T00:00:00')
      const interval = intervalToDuration( {
        start: new Date(), 
        end: summer
      })
    setToSummer(interval)
    }, 1000)

    return() => {
      clearInterval(intervalId)
    }
   }, [])

  return (
    <div className="App">
      <div className="column1">
        <section className="S1A">
        <img className='snowman' src={snowman} alt='snowman' />
        <p>I HOPPE TO GET FROM WINTER TO SUMMER IN NO TIME AND NOT TO DIE TRYING NOT FREZZE TOO MUCH. I LOVE THE WARM WEATHER.</p>
        <div className='subgroup'>
        <img className='skiing' src={skiing} alt='person skiing' />
        <img className='winter' src={winter} alt='view of winter with snow' />
        </div>
        <div>
        <img className='moresnow' src={moresnow} alt='view of forest with snow' />
        </div>
        <div className='subgroup2'>
        <img className='snows' src={snows} alt='person walking at night while snowing' />
        <img className='night' src={night} alt='night in winter' />
        </div>
        </section>
        <section className="S1B">
        <img className='winterplane' src={winterplane} alt='plane in winter' />
        </section>
      </div>
      <div className="column2">
        <section className="S2A">
          <img className='plane' src={plane} alt='plane to summer' />
        </section>
        <section className="S2B">
          <h1 className='days'>{toSummer.months} months, {toSummer.days} days, {toSummer.hours}:{toSummer.minutes}:{toSummer.seconds}</h1>
          <h1 className='title'>On the Way to Summer!!!</h1>
        </section>
        <section className="S2C">
        <img className='wintermore' src={wintermore} alt='winter forest with snow' />
        </section>
      </div>
      <div className="column3">
        <section className="S3A">
        <img className='sunflowers' src={sunflowers} alt='sunflowers field' />
        </section>
        <section className="S3B">
          <img className='sunsand' src={sunsand} alt='sun painted in the sand beach' />
        </section>
        <section className="S3C">
          <img className='summer' src={summer} alt='flowers field in summer' />
        </section>
      </div>
    </div>
  )
}

export default App
