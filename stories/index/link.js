import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import Link from '../../src/components/Link'

export default (
  storiesOf('Link', module)
    .addParameters({ options: { addonPanelInRight: false } })
    .addWithJSX('Default', () => {
        return (
          <Link>Default Link</Link>
        )
      },
      { options: { addonPanelInRight: false } }
    )
    .addWithJSX('Primary', () => (
      <Link color="primary">Primary Link</Link>
    ))
    .addWithJSX('Primary Contrast', () => (
        <Link color="primary" contrast>Primary Contrast Link</Link>
      ),
      { notes: 'Text may appear white, on white background in this case.' }
    )
    .addWithJSX('Secondary', () => (
      <Link color="secondary">Secondary Link</Link>
    ))
    .addWithJSX('Secondary Contrast', () => (
        <Link color="secondary" contrast>Secondary Contrast Link</Link>
      ),
      { notes: 'Text may appear white, on white background in this case.' }
  )
)
