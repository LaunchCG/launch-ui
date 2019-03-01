import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { withNotes } from '@storybook/addon-notes'
//import { withInfo } from '@storybook/addon-info'
// material ui components
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
// launch wrapper components
import Button from '../src/components/Button'
import Link from '../src/components/Link'
// themes
import { themeConfig as themeLaunchConfig } from '../src/themes/themeLaunch'
import { themeConfig as themeDarkConfig } from '../src/themes/themeDark'

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
  .addWithJSX('Primary Contrast', () => (
      <Link color="primary" contrast>Primary Contrast Link</Link>
    ),
    { notes: 'Text may appear white, on white background in this case.' }
  )
  .addWithJSX('Secondary', () => (
    <Link color="secondary">Secondary Link</Link>
  ))
  .addWithJSX('Secondary Contrast', () => (
      <Link color="secondary" contrast>Secondary Contrast Link</Link>
    ),
    { notes: 'Text may appear white, on white background in this case.' }
)

storiesOf('Text Field', module)
  .addWithJSX('basic', () => (
      <TextField label="Name" >
        Basic Text Field
      </TextField>
    ),
    { notes: 'Using the basic MUI component.' }
  )

storiesOf('Typography', module)
  .addWithJSX('h1', () => (
    <Typography variant="h1">h1. Heading</Typography>
  ))
  .addWithJSX('h2', () => (
    <Typography variant="h2">h2. Heading</Typography>
  ))
  .addWithJSX('h3', () => (
    <Typography variant="h3">h3. Heading</Typography>
  ))
  .addWithJSX('h4', () => (
    <Typography variant="h4">h4. Heading</Typography>
  ))
  .addWithJSX('h5', () => (
    <Typography variant="h5">h5. Heading</Typography>
  ))
  .addWithJSX('h6', () => (
    <Typography variant="h6">h6. Heading</Typography>
  ))
  .addWithJSX('subtitle', () => (
    <Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
  ))
  .addWithJSX('subtitle', () => (
    <Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
  ))
  .addWithJSX('body1', () => (
    <Typography variant="body1">
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    </Typography>
  ))
  .addWithJSX('body2', () => (
    <Typography variant="body2">
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    </Typography>
  ))
  .addWithJSX('button', () => (
    <Typography variant="button">button text</Typography>
  ))
  .addWithJSX('caption', () => (
    <Typography variant="caption">caption text</Typography>
  ))
  .addWithJSX('overline', () => (
    <Typography variant="overline">overline text</Typography>
  ))
