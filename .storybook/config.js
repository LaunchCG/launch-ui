import { addDecorator, configure, setAddon } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withInfo } from '@storybook/addon-info'

//import { jsxDecorator } from 'storybook-addon-jsx'
import JSXAddon from 'storybook-addon-jsx'

addDecorator(
  withInfo({
    inline: true,
    header: false,
    source: true
  })) // should be declared FIRST

addDecorator(
  withOptions({
    name: 'Launch UI',
    url: 'https://github.com/LaunchCG/launch-ui',
    downPanelInRight: false,
  })
)

//addDecorator(jsxDecorator)

setAddon(JSXAddon)

function loadStories() {
  require('../src/stories/index.js')
}

configure(loadStories, module)
