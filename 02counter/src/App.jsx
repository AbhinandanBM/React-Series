import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15) //React hook
  // let count=15

  const addvalue = () => {
    console.log("value added", count);
    count = count + 1
    setCount(count)
  }

  const subvalue = () => {
    console.log("value subtracted", count);
    count = count - 1
    setCount(count)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {count}</h2>

      <button
        onClick={addvalue}
      >Add Count</button>
      <br />
      <button
        onClick={subvalue}
      >Sub Count</button>

    </>
  )
}

export default App
