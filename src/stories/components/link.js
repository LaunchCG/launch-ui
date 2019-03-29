import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import Link from '@material-ui/core/Link'

export default (
  storiesOf('MUI Link', module)
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
    .add('color="primary" variant="body1"', () => (
        <Link color="primary" variant="body1">{'Primary Variant="body1" Link'}</Link>
    ))
    .add('Secondary', () => (
      <Link color="secondary">Secondary Link</Link>
    ))
    .add('color="secondary" variant="body2"', () => (
        <Link color="secondary" variant="body2">{'Secondary Variant="body2" Link'}</Link>
    ))
)
