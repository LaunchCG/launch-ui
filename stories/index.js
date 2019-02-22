import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { withNotes } from '@storybook/addon-notes';
// material ui components
import TextField from '@material-ui/core/TextField'
// storybook components
import { Button } from '@storybook/react/demo'
// launch wrapper components
import Link from '../src/components/Link'
// themes
import { themeLaunchConfig } from '../src/themes/themeLaunch'
import { themeDarkConfig } from '../src/themes/themeDark'

// you can specify only required fields overriding the `Launch Base Theme`
const launchTheme = {
    themeName: 'Launch Theme',
    ...themeLaunchConfig
};

const darkTheme = {
    themeName: 'Dark Theme',
    ...themeDarkConfig
};

// global decorators

addDecorator(withNotes)

// note, due to issue in library only the first theme can be used:
// TODO add link to issue
addDecorator(muiTheme([
  launchTheme,
  darkTheme
]));

// stories

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('white on black', () => (
    <Button>White on Black</Button>
  ))

storiesOf('Link', module)
  //.addDecorator(muiTheme([LaunchTheme]))
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
