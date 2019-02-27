import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'

import App from '../src/App'
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
