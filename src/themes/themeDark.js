import { createMuiTheme } from '@material-ui/core/styles'

const fonts = {
  regular: ['"Times"', 'serif'].join(','),
}

const palette = {
  black: '#292929',
  grey25: '#404040',
  grey50: '#7f7f7f',
  grey75: '#202020',
  white: '#f2f2f2',
  orange: '#f8390e',
  skyBlue: '#669edc',
}

const themeConfig = {
  palette: {
    background: {
      default: palette.black,
      paper: palette.black
    },
    primary: {
      main: palette.orange,
      contrastTest: palette.white
    },
    secondary: {
      main: palette.skyBlue,
      contrastText: palette.white
    },
    text: {
      primary: palette.white
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: {
      serifReg: fonts.regular,
      sansSerifReg: fonts.regular
    },
    body1: {
      fontFamily: fonts.regular
    },
    body2: {
      // DEFAULT: Typography
      fontFamily: fonts.regular
    },
    subtitle1: {
      fontFamily: fonts.regular
    },
    subtitle2: {
      fontFamily: fonts.regular
    },
    h6: {
      fontFamily: fonts.regular
    },
    h5: {
      fontFamily: fonts.regular
    },
    h4: {
      fontFamily: fonts.regular
    },
    h3: {
      fontFamily: fonts.regular
    },
    h2: {
      fontFamily: fonts.regular
    },
    h1: {
      fontFamily: fonts.regular
    },
    button: {
      fontFamily: fonts.regular
    },
    caption: {
      fontFamily: fonts.regular
    },
    overline: {
      fontFamily: fonts.regular
    },
  },
  overrides: {}
}

const theme = createMuiTheme(themeConfig)

export { palette, themeConfig }

export default theme
