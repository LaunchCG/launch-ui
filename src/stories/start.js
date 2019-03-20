import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from '../App'
import { ThemeOverview, Swatch, Config } from '../start'

import { Button, Welcome } from '@storybook/react/demo'

// config stories
import link from './components/link'
import button from './components/button'
import typography from './components/typography'
import page from './components/page'

// themes
import { themeConfig as themeLaunchConfig } from '../themes/themeLaunch'
import { themeConfig as themeDarkConfig } from '../themes/themeDark'

// you can specify only required fields overriding the `Launch Base Theme`
const launchTheme = {
    themeName: 'Launch Theme',
    ...themeLaunchConfig
}

const darkTheme = {
    themeName: 'Dark Theme',
    ...themeDarkConfig
}

// note, due to issue in library only the first theme can be used:
// TODO add link to issue
addDecorator(muiTheme([
  launchTheme,
  darkTheme
]))

storiesOf('Start', module)
  .add('Home', () => (
    <App />
  ))
  .add('Config', () => (
    <Config />
  ))
  .add('Theme Overview', () => (
      <ThemeOverview />
    ),
    { notes: 'Switch themes in the header.' }
  )
  .add('Swatch', () => (
    <Swatch />
  ))

// storiesOf('Storybook', module)
//   .add('to Storybook', () =>
//     <Welcome showApp={linkTo('Button')} />
//   )
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ))
