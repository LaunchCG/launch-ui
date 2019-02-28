import React, { Component } from 'react'

import Example from './Example'
import ControlWrapper from './ControlWrapper'

import Button from '../components/Button'
import Link from '../components/Link'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import themeLight, { themeDark } from '../themes'

const theme = createMuiTheme(themeLight)

class Summary extends Component {
  render() {
    return (
      <Example>
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
      </Example>
    )
  }
}

export default Summary
