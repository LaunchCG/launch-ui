import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from '../App'
import { ThemeOverview, Swatch, Install } from '../start'

import { Button, Welcome } from '@storybook/react/demo'

// themes
import { themeConfig as themeLaunchConfig } from '../themes/themeLaunch'
import { themeConfig as themeDarkConfig } from '../themes/themeDark'

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

export default (
  storiesOf('Start', module)
    // .add('Home', () => (
    //   <App />
    // ))
    .add('Install', () => (
      <Install />
    ))
    .add('Theme Overview', () => (
        <ThemeOverview />
      ),
      { notes: 'Switch themes in the header.' }
    )
    .add('Swatch', () => (
      <Swatch />
    ))
)
