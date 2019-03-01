import React from 'react'
import App from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import themeLaunch from './themes'

const theme = createMuiTheme(themeLaunch)

export default function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  )
}
