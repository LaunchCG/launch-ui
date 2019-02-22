import { createMuiTheme } from '@material-ui/core/styles'

const themeLaunchConfig = {
  palette: {
    primary: {
      main: 'rgb(214, 64, 30)',
    },
  }
}

const themeLaunch = createMuiTheme(themeLaunchConfig)

export { themeLaunchConfig }

export default themeLaunch
