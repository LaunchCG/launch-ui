import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { withNotes } from '@storybook/addon-notes'
//import { withInfo } from '@storybook/addon-info'
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
  // .addParameters({
  //   info: {
  //     //propTables: [MUIButton]
  //   }
  // })
  // .add(
  //   'Default',
  //   withInfo({
  //     text: 'Button Text goes here...'
  //   })(() => ( <Button>Default Button</Button> ))
  // )
  // .add('Primary Contained', () => (
  //     <Button variant="contained" color="primary">Primary Contained Button</Button>
  //   ),
  //   {
  //     info: {
  //       text: 'This is a primary button',
  //       propTablesExclude: [MUIButton]
  //     }
  //   }
  // )
  .addWithJSX('Default', () => (
    <Button>Default Button</Button>
  ))
  .addWithJSX('Primary Outlined', () => (
    <Button variant="outlined" color="primary">Primary Outlined Button</Button>
  ))
  .addWithJSX('Primary Text', () => (
    <Button variant="text" color="primary">Primary Text Button</Button>
  ))
  .addWithJSX('Secondary Contained', () => (
    <Button variant="contained" color="secondary">Secondary Contained Button</Button>
  ))
  .addWithJSX('Secondary', () => (
    <Button variant="text" color="secondary">Secondary Text Button</Button>
  ))

storiesOf('Link', module)
  .addParameters({ options: { addonPanelInRight: false } })
  .addWithJSX('Default', () => {
      return (
        <Link>Default Link</Link>
      )
    },
    { options: { addonPanelInRight: false } }
  )
  .addWithJSX('Primary', () => (
    <Link color="primary">Primary Link</Link>
  ))
  .addWithJSX('Secondary', () => (
    <Link color="secondary">Secondary Link</Link>
  ))

storiesOf('Text Field', module)
  .addWithJSX('basic', () => (
      <TextField label="Name" >
        Basic Text Field
      </TextField>
    ),
    { notes: 'Using the basic MUI component.' }
)
