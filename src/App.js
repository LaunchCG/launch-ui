import React, { Component } from 'react'
import launchLogo from './images/launch-logo.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={launchLogo} className="App-logo" alt="logo" />
          <p>
            A Boilerplate Launch UI React Component Library based on Material UI
          </p>
          <code>npm run storybook</code>
        </header>
      </div>
    )
  }
}

export default App
