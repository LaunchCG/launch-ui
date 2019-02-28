import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Example from '../Example'
import Color from './Color'

import { launchPalette } from '../../themes/themeLaunch'

class Swatch extends Component {
  render() {
    const { classes } = this.props
    const colors = Object.keys(launchPalette).map( (name, index) => <Color key={index} color={launchPalette[name]} name={name}/>)
    return (
      <Example showCode={false}>
        {colors}
      </Example>
    )
  }
}

const styles = theme => {
  return {

  }
}

export default withStyles(styles)(Swatch)
