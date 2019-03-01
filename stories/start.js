import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'

import App from '../src/App'
import { ThemeOverview, Swatch, Config } from '../src/start'

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
