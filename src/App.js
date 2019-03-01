import React, { Component } from 'react'
import launchLogo from './images/launch-logo.png'
import { withStyles } from '@material-ui/core/styles'
import './App.css'

import Link from './components/Link'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className="App">
        <header className={classes.header}>
          <img src={launchLogo} className="App-logo" alt="logo" />
          <p>
            A Boilerplate Launch UI React Component Library based on Material UI
          </p>
          <ul className={classes.ul}>
            <li>Learn how to <Link color="primary" contrast>Configure</Link> the theme quickly</li>
            <li>Test drive multiple themes with the <Link color="primary" contrast>Theme Switcher</Link></li>
            <li>Check out the <Link color="primary" contrast>Swatch</Link> to view all the colors in the theme</li>
            <li>MUI and Launch Wrapper <Link color="primary" contrast>Components</Link> are listed below Start in the side nav</li>
          </ul>
        </header>
      </div>
    )
  }
}

const styles = theme => {
  const { palette } = theme
  return {
    header: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(1px + 2vmin)',
      color: 'white',
      fontFamily: 'Roboto',
      fontWeight: '100'
    },
    ul: {
      marginTop: '5vh',
      textAlign: 'left',
      fontSize: 'calc(1px + 1.5vmin)',
      '& li': {
        marginBottom: '2vh'
      }
    }
  }
}

export default withStyles(styles)(App)
