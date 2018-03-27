import React from 'react'
import './App.css'

import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Header from './Header'

const App = () => {
  return (
    <div className="App">
        <div className='App-box'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        </div>

        
        <Step1 />

    </div>
  )
}


export default App
