import './App.css'
import Card from './components/Card'

function App() {
  let myobj={
    name:"Abhi",
    age:21
  }

  let myarr=[2,3,4]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="Hunter" btntxt="click me"/>
      <Card username="Dev" btntxt="visit here"/>
    </>
  )
}

export default App
