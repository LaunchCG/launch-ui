import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import Typography from '@material-ui/core/Typography'

export default (
  storiesOf('MUI Typography', module)
    .add('h1', () => (
      <Typography variant="h1">h1. Heading</Typography>
    ))
    .add('h2', () => (
      <Typography variant="h2">h2. Heading</Typography>
    ))
    .add('h3', () => (
      <Typography variant="h3">h3. Heading</Typography>
    ))
    .add('h4', () => (
      <Typography variant="h4">h4. Heading</Typography>
    ))
    .add('h5', () => (
      <Typography variant="h5">h5. Heading</Typography>
    ))
    .add('h6', () => (
      <Typography variant="h6">h6. Heading</Typography>
    ))
    .add('subtitle', () => (
      <Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
    ))
    .add('subtitle', () => (
      <Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
    ))
    .add('body1', () => (
      <Typography variant="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    ))
    .add('body2', () => (
      <Typography variant="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    ))
    .add('button', () => (
      <Typography variant="button">button text</Typography>
    ))
    .add('caption', () => (
      <Typography variant="caption">caption text</Typography>
    ))
    .add('overline', () => (
      <Typography variant="overline">overline text</Typography>
    ))
)
