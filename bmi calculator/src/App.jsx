import { useState } from 'react'
import './App.css'

const App = () => {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);

  return (
    <>
      <main>
        <h1>Project On BMI Calculator</h1>
        <div className='input-section'>
          <p className='slider-output'>Weight:{weight} kg</p>
          <input className='input-slider' type='range' step="1" min="40" max="200" onChange={(e) => setWeight(e.target.value)} value={weight}
          />

          <p className='slider-output'>Height:{height}cm</p>
          <input className='input-slider' type='range' step="1" min="100" max="500" onChange={(e) => setHeight(e.target.value)} value={height} />
        </div>
        <div className='output-section'>
          <p> Your BMI is:</p>
          <p className='Output'>100</p>
        </div>

      </main>

    </>
  )
}

export default App
