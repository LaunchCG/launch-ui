import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'

import TextField from '@material-ui/core/TextField'
import Link from '../src/components/Link'

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('white on black', () => (
    <Button>White on Black</Button>
  ))

storiesOf('Link', module)
  .add('basic', () => (
    <Link>Basic Link</Link>
  ))

storiesOf('Text Field', module)
  .add('basic', () => (
    <TextField
      label="Name"
      margin="normal"
    >Basic Text Field</TextField>
  ))
