import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import TextField from '@material-ui/core/TextField'

export default (
  storiesOf('MUI TextField', module)
    .add('Default', () => (
      <TextField
          label="Name"
          margin="normal"
        />
    ))
)
