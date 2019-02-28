import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'

import Summary from '../src/examples/Summary'

storiesOf('Examples', module)
  .addParameters({
    info: {
      inline: false
    }
  })
  .add('Summary', () => (
    <Summary />
  ))
