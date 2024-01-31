import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Hi hello React</h1>
    </div>
  )
}

// const ReactElement ={
//   type: 'a',
//     props: {
//         href: 'http://react.dev',
//         target: '_blank',
//     },
//     children: "visit here to learn more"
// }

const anotherElement = (
  <a href="http://react.dev" target='_blank'>Visit here</a>
)


const anotherUser = "Another User"

const ReactElement = React.createElement(
  'a',
  { href: "http://react.dev", target: "_blank" },
  "visit here to learn more",
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
