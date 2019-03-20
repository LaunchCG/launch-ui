import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import Link from '../../components/Link'

export default (
  storiesOf('Link', module)
    .addParameters({ options: { addonPanelInRight: false } })
    .add('Default', () => {
        return (
          <Link>Default Link</Link>
        )
      },
      { options: { addonPanelInRight: false } }
    )
    .add('Primary', () => (
      <Link color="primary">Primary Link</Link>
    ))
    .add('Primary Contrast', () => (
        <Link color="primary" contrast>Primary Contrast Link</Link>
      ),
      { notes: 'Text may appear white, on white background in this case.' }
    )
    .add('Secondary', () => (
      <Link color="secondary">Secondary Link</Link>
    ))
    .add('Secondary Contrast', () => (
        <Link color="secondary" contrast>Secondary Contrast Link</Link>
      ),
      { notes: 'Text may appear white, on white background in this case.' }
  )
)
