import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import App from '../src/App'
import { Summary, Swatch } from '../src/start'

addDecorator(withNotes)

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
  .add('Theme Switcher', () => (
      <Summary />
    ),
    { notes: 'Switch themes in the header.' }
  )
  .add('Swatch', () => (
      <Swatch />
    )
  )
