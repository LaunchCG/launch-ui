import { createMuiTheme } from '@material-ui/core/styles'

const themeDarkConfig = {
  palette: {
    primary: {
      main: '#00FF00',
      light: '#00FF00',
      dark: '#00FF00',
      contrastTest: '#00FF00'
    },
    // primary1Color: '#00FF00',
    // primaryColor: '#00FF00',
    // alternateTextColor: '#00FF00',
    // canvasColor: '#00FF00',
    // textColor: '#00FF00',
    // secondaryTextColor: '#00FF00',
    // disabledColor: '#00FF00',
    // accent1Color: '#00FF00',
  }
}

const themeDark = createMuiTheme(themeDarkConfig)

export { themeDarkConfig }

export default themeDark
