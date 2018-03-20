import React from 'react'
import './App.css'

import {Route, Switch} from 'react-router-dom'

const App = () => {
  return (
     <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Have the FREE WILL to make a will today</h1>
          <p>- Your peace of mind wills it so!</p>
        </header>
        <Step1 />

      </div>
  )
}


export default App
