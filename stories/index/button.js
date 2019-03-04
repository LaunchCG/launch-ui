import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import Button from '../../src/components/Button'

export default (
  storiesOf('Button', module)
    // .addParameters({
    //   info: {
    //     //propTables: [MUIButton]
    //   }
    // })
    // .add(
    //   'Default',
    //   withInfo({
    //     text: 'Button Text goes here...'
    //   })(() => ( <Button>Default Button</Button> ))
    // )
    // .add('Primary Contained', () => (
    //     <Button variant="contained" color="primary">Primary Contained Button</Button>
    //   ),
    //   {
    //     info: {
    //       text: 'This is a primary button',
    //       propTablesExclude: [MUIButton]
    //     }
    //   }
    // )
    .addWithJSX('Default', () => (
      <Button>Default Button</Button>
    ))
    .addWithJSX('Primary Outlined', () => (
      <Button variant="outlined" color="primary">Primary Outlined Button</Button>
    ))
    .addWithJSX('Primary Text', () => (
      <Button variant="text" color="primary">Primary Text Button</Button>
    ))
    .addWithJSX('Secondary Contained', () => (
      <Button variant="contained" color="secondary">Secondary Contained Button</Button>
    ))
    .addWithJSX('Secondary', () => (
      <Button variant="text" color="secondary">Secondary Text Button</Button>
    ))
)
