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
  require('../stories/app.js')
  //require('../stories/examples.js')
  require('../stories/index.js')
}

configure(loadStories, module)
