import React from 'react'
import TitleScreen from './pages/TitleScreen'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter basename="/Persona2">
      <Switch>
        <Route exact path="/">
          <TitleScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
