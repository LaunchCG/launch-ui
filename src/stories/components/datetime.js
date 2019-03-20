import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import DateTime from '../../components/DateTime'

export default (
  storiesOf('DateTime', module)
    .add('DateTime', () => (
      <DateTime
        label='Date Time'
        type='datetime-local'
        defaultCurrentDateTime
      />
    ))
    .add('Time', () => (
      <DateTime
        label='Time'
        type='time'
        defaultCurrentDateTime
      />
    ))
    .add('Time with Input Props', () => (
      <DateTime
        type='time'
        label='Time'
        defaultCurrentDateTime
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
        defaultCurrentDateTime
      />
    ))
)
