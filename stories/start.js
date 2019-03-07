import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'

import App from '../src/App'
import { ThemeOverview, Swatch, Config } from '../src/start'

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

// note, due to issue in library only the first theme can be used:
// TODO add link to issue
addDecorator(muiTheme([
  launchTheme,
  darkTheme
]))

// stories

storiesOf('Start', module)
  .addParameters({
    info: {
      inline: false
    }
  })
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
