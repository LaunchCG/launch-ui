import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Link from '@material-ui/core/Link'

class Install extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Typography variant="h3" classes={classes.h}>Instructions for installing</Typography>

        <Typography variant="h4" classes={classes.h}>Install</Typography>
        <Typography style={{marginBottom: '10vh'}}>Coming soon</Typography>

        <Typography variant="h4" classes={classes.h}>Configure Theme</Typography>
        <Typography variant="h5" classes={classes.h}>Palette</Typography>
        <ol>
          <li>Modfiy the theme file at: /themes/</li>
          <li>Overwrite the palette colors for `const palette`</li>
          <li>Add/remove colors as needed.  Modify `const themeConfig.palette` if needed</li>
        </ol>

        <Typography variant="h5" classes={classes.h}>Fonts</Typography>
        <ol>
          <li>Modfiy the theme file at: /themes/</li>
          <li>Overwrite the fonts for `const fonts`</li>
          <li>Add/remove fonts as needed.  Modify `const themeConfig.typography` if needed</li>
        </ol>

        <Typography variant="h5" classes={classes.h}>Common Issues</Typography>
        <ul>
          <li>Overrides</li>
          <ul>
            <li>themeConfig.overrides exists in the case that you may need to override the style for all instances of an element/component</li>
            <li><Link href="https://material-ui.com/customization/overrides/">https://material-ui.com/customization/overrides/</Link></li>
          </ul>
        </ul>
      </div>
    )
  }
}

const styles = theme => {
  const { palette } = theme
  return {
    paper: {
      padding: '50px 20px'
    },
    h1: {
      marginBottom: 'calc(5px + 2vh)'
    },
    h: {
      marginBottom: '.5em'
    }
  }
}

export default withStyles(styles)(Install)
