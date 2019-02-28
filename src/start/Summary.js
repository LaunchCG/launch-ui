import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Example from './Example'
import ControlWrapper from './ControlWrapper'

import Paper from '@material-ui/core/Paper'

import Button from '../components/Button'
import Link from '../components/Link'

class Summary extends Component {
  render() {
    const { classes } = this.props
    return (
      <Example showCode>
        <Paper className={classes.paper}>
          <ControlWrapper>
            <Button>Default Button</Button>
            <Button variant="contained" color="primary">Launch MUI Installed</Button>
            <Button variant="text" color="primary">Primary Text Button</Button>
          </ControlWrapper>
          <ControlWrapper>
          <Button variant="contained" color="secondary">Secondary Contained Button</Button>
          <Button variant="text" color="secondary">Secondary Text Button</Button>
          </ControlWrapper>
          <Link>Default Link</Link>
          <Link color="primary">Primary Link</Link>
          <Link color="secondary">Secondary Link</Link>
        </Paper>
      </Example>
    )
  }
}

const styles = theme => {
  const { palette } = theme
  return {
    paper: {
      padding: '50px 20px'
    }
  }
}

export default withStyles(styles)(Summary)
