import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import { withNotes } from '@storybook/addon-notes';

import TextField from '@material-ui/core/TextField'
import Link from '../src/components/Link'

addDecorator(withNotes)

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
  //.addDecorator(withNotes)
  .add('basic',
    () => (
      <TextField label="Name" >
        Basic Text Field
      </TextField>
    ),
    { notes: 'Using the basic MUI component.' }
)
