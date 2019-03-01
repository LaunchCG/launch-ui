import React, { PureComponent } from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import themeLight, { themeDark } from '../themes'

const themes = {
  light: themeLight,
  dark: themeDark
}

class ThemeSwitcher extends PureComponent {
  state = {
    activeTheme: themes.light
  }

  onChangeTheme = e => {
    this.setState({
      activeTheme: themes[e.target.value]
    })
  }

  render() {
    const { children, showCode } = this.props
    const { activeTheme } = this.state
    const theme = createMuiTheme(activeTheme)
    const themeOptions = Object.keys(themes).map( (theme, index) => <option value={theme} key={index}>{theme}</option>)

    console.log('activeTheme.palette',activeTheme.palette);

    const code = (showCode) ?
        <pre>
          {JSON.stringify(activeTheme, null, 2)}
        </pre>
      :
        ''

    return (
      <MuiThemeProvider theme={theme}>
        Theme:&nbsp;
        <select onChange={this.onChangeTheme}>
          {themeOptions}
        </select>
        <br/><br/>

        {children}

        {code}
      </MuiThemeProvider>
    )
  }
}

export default ThemeSwitcher
