import Counter from './components/counter/Counter'

import './App.css'

function App() {

  return (
    <>
      <div id="content">
        <h1>Hello World!</h1>
        <p className='power-p'>Portföljen är under konstruktion...</p>
        <p className='power-p'>Titta gärna tillbaka senare!</p>

        <div className='counter-container'>
          <p className='hush-p'>Eller stanna ett tag till och lek med den här räknaren... 🥺</p>
          <Counter />
        </div>

      </div>
    </>
  )
}

export default App
