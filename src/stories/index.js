import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { withNotes } from '@storybook/addon-notes'
//import { withInfo } from '@storybook/addon-info'

// components
// import button from './index/button'
// import typography from './index/typography'
import link from './components/link'
//import page from './index/page'

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

// global decorators

addDecorator(withNotes)

// note, due to issue in library only the first theme can be used:
// TODO add link to issue
addDecorator(muiTheme([
  launchTheme,
  darkTheme
]))

// stories
