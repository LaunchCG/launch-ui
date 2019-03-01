import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import ThemeSwitcher from '../ThemeSwitcher'
import Color from './Color'

import { palette } from '../../themes/themeLaunch'

class Swatch extends Component {
  render() {
    const { classes } = this.props
    const colors = Object.keys(palette).map( (name, index) => <Color key={index} color={palette[name]} name={name}/>)
    return (
      <ThemeSwitcher showCode={false}>
        {colors}
      </ThemeSwitcher>
    )
  }
}

const styles = theme => {
  return {

  }
}

export default withStyles(styles)(Swatch)
