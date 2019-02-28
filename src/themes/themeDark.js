import { createMuiTheme } from '@material-ui/core/styles'

const launchPalette = {
  black: '#000000',
  grey25: '#404040',
  grey50: '#7f7f7f',
  grey75: '#202020',
  white: '#f2f2f2',
  orange: '#a72f14',
  skyBlue: '#314965',
}

const themeDarkConfig = {
  palette: {
    background: {
      default: launchPalette.black,
      paper: launchPalette.black
    },
    primary: {
      main: launchPalette.orange,
      contrastTest: launchPalette.white
    },
    secondary: {
      main: launchPalette.skyBlue,
      contrastText: launchPalette.white
    },
    text: {
      primary: launchPalette.white
    }
  }
}

const themeDark = createMuiTheme(themeDarkConfig)

export { themeDarkConfig }

export default themeDark
