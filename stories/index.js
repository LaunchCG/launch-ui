import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { withNotes } from '@storybook/addon-notes'
// material ui components
import TextField from '@material-ui/core/TextField'
// launch wrapper components
import Button from '../src/components/Button'
import Link from '../src/components/Link'
// themes
import { themeLaunchConfig } from '../src/themes/themeLaunch'
import { themeDarkConfig } from '../src/themes/themeDark'

// you can specify only required fields overriding the `Launch Base Theme`
const launchTheme = {
    themeName: 'Launch Theme',
    ...themeLaunchConfig
}

const darkTheme = {
    themeName: 'Dark Theme',
    ...themeDarkConfig
}

// global decorators

addDecorator(withNotes)

// note, due to issue in library only the first theme can be used:
// TODO add link to issue
addDecorator(muiTheme([
  launchTheme,
  darkTheme
]))

// stories

storiesOf('Button', module)
  .add('Default', () => (
    <Button>Default Button</Button>
  ))
  .add('Primary Contained', () => (
    <Button variant="contained" color="primary">Primary Contained Button</Button>
  ))
  .add('Primary Outlined', () => (
    <Button variant="outlined" color="primary">Primary Outlined Button</Button>
  ))
  .add('Primary Text', () => (
    <Button variant="text" color="primary">Primary Text Button</Button>
  ))
  .add('Secondary Contained', () => (
    <Button variant="contained" color="secondary">Secondary Contained Button</Button>
  ))
  .add('Secondary', () => (
    <Button variant="text" color="secondary">Secondary Text Button</Button>
  ))

storiesOf('Link', module)
  .addParameters({ options: { addonPanelInRight: false } })
  .add('basic', () => {
    return (
      <Link>Basic Link</Link>
    )
  },
  { options: { addonPanelInRight: false } }
)

storiesOf('Text Field', module)
  .add('basic', () => (
      <TextField label="Name" >
        Basic Text Field
      </TextField>
    ),
    { notes: 'Using the basic MUI component.' }
)
