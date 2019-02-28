import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Summary from '../src/examples/Summary'

// global decorators

addDecorator(withNotes)

// stories

storiesOf('Examples', module)
  .addParameters({
    info: {
      inline: false
    }
  })
  .add('Theme Switcher', () => (
      <Summary />
    ),
    { notes: 'Switch themes in the header.' }
  )
