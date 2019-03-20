import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'

import App from '../App'
import link from './components/link'
import Link from '../components/Link'

// themes
import { themeConfig as themeLaunchConfig } from '../themes/themeLaunch'
import { themeConfig as themeDarkConfig } from '../themes/themeDark'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'

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

storiesOf('Link', module)
  .add('Default', () => (
    <Link>Default Link</Link>
  ))
//
// storiesOf('Start', module)
//   .add('Home', () => (
//     <App />
//   ))
//
// // storiesOf('Storybook', module)
// //   .add('to Storybook', () =>
// //     <Welcome showApp={linkTo('Button')} />
// //   )
// //   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// //   .add('with some emoji', () => (
// //     <Button onClick={action('clicked')}>
// //       <span role="img" aria-label="so cool">
// //         😀 😎 👍 💯
// //       </span>
// //     </Button>
// //   ))
//
// storiesOf('Link', module)
//   .add('Default', () => (
//     <Link>Default Link</Link>
//   ))
