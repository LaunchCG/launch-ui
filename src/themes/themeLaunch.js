import { createMuiTheme } from '@material-ui/core/styles'

const launchFonts = {

}

const launchPalette = {
  black: '#000000',
  grey25: '#404040',
  grey50: '#7f7f7f',
  grey75: '#bfbfbf',
  white: '#ffffff',
  orange: '#d6401e',
  skyBlue: '#66819f',
}

const themeLaunchConfig = {
  palette: {
    colors: launchPalette,
    primary: {
      main: launchPalette.orange,
      contrastText: launchPalette.white
    },
    secondary: {
      main: launchPalette.skyBlue,
      contrastText: launchPalette.white
    },
    text: {
      primary: launchPalette.black
    }
  },
  typography: {
    useNextVariants: true
  }
}

const themeLaunch = createMuiTheme(themeLaunchConfig)

export { themeLaunchConfig }

export default themeLaunch
