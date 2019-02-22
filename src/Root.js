import React from 'react'
import App from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import themeLight from './themes'

const theme = createMuiTheme(themeLight)

export default function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  )
}
