import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import Typography from '@material-ui/core/Typography'

export default (
  storiesOf('Typography', module)
    .addWithJSX('h1', () => (
      <Typography variant="h1">h1. Heading</Typography>
    ))
    .addWithJSX('h2', () => (
      <Typography variant="h2">h2. Heading</Typography>
    ))
    .addWithJSX('h3', () => (
      <Typography variant="h3">h3. Heading</Typography>
    ))
    .addWithJSX('h4', () => (
      <Typography variant="h4">h4. Heading</Typography>
    ))
    .addWithJSX('h5', () => (
      <Typography variant="h5">h5. Heading</Typography>
    ))
    .addWithJSX('h6', () => (
      <Typography variant="h6">h6. Heading</Typography>
    ))
    .addWithJSX('subtitle', () => (
      <Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
    ))
    .addWithJSX('subtitle', () => (
      <Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
    ))
    .addWithJSX('body1', () => (
      <Typography variant="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    ))
    .addWithJSX('body2', () => (
      <Typography variant="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    ))
    .addWithJSX('button', () => (
      <Typography variant="button">button text</Typography>
    ))
    .addWithJSX('caption', () => (
      <Typography variant="caption">caption text</Typography>
    ))
    .addWithJSX('overline', () => (
      <Typography variant="overline">overline text</Typography>
    ))
)
