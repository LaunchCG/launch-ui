import { addDecorator, configure, setAddon } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withInfo } from '@storybook/addon-info'
import JSXAddon from 'storybook-addon-jsx'

addDecorator(
  withInfo({
    inline: true,
    header: false,
    source: false
  })) // should be declared FIRST

addDecorator(
  withOptions({
    name: 'Launch UI',
    url: 'https://github.com/LaunchCG/launch-ui',
    downPanelInRight: false,
  })
)

setAddon(JSXAddon)

function loadStories() {
  require('../stories/index.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
