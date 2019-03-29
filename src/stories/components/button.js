import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import Button from '@material-ui/core/Button'

export default (
  storiesOf('MUI Button', module)
    .add('Default', () => (
      <Button>Default Button</Button>
    ))
    .add('Primary Outlined', () => (
      <Button variant="outlined" color="primary">Primary Outlined Button</Button>
    ))
    .add('Primary Text', () => (
      <Button variant="text" color="primary">Primary Text Button</Button>
    ))
    .add('Secondary Contained', () => (
      <Button variant="contained" color="secondary">Secondary Contained Button</Button>
    ))
    .add('Secondary', () => (
      <Button variant="text" color="secondary">Secondary Text Button</Button>
    ))
)
