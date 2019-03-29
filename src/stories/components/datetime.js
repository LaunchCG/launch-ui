import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import DateTime from '../../components/DateTime'
import { withInfo } from '@storybook/addon-info'

export default (
  storiesOf('DateTime', module)
    .addDecorator(
      withInfo({
        inline: true,
        header: false,
        source: true
      })) // should be declared FIRST
    .add('DateTime', () => (
      <DateTime
        label='Date Time with Default Values'
        type='datetime-local'
        defaultCurrentDateTime
      />
    ))
    .add('Time', () => (
      <DateTime
        label='Time'
        type='time'
      />
    ))
    .add('Time with Input Props', () => (
      <DateTime
        type='time'
        label='Time'
        inputProps={{
          step: 300 // incriment by 5min
        }}
      />
    ))
    .add('Date', () => (
      <DateTime
        label='Date'
        label='Date'
        type='date'
      />
    ))
)
