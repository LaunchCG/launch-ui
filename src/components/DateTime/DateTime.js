import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

class DateTime extends PureComponent {
  render() {
    const { type, defaultCurrentDateTime, ...props } = this.props

    // calc the current date and time
    let defaultValue = null
    if (defaultCurrentDateTime) {
      const date = new Date()
      const year = date.getUTCFullYear().toString().padStart(4, 0)
      const month = (date.getUTCMonth() + 1).toString().padStart(2, 0)
      const day = date.getUTCDate().toString().padStart(2, 0)
      const hour = date.getUTCHours()
      const minute = date.getUTCMinutes()

      // set the default dateTime value
      switch (type) {
        case 'datetime-local':
          defaultValue = `${year}-${month}-${day}T${hour}:${minute}`
          break
        case 'date':
          defaultValue = `${year}-${month}-${day}`
          break
        case 'time':
          defaultValue = `${hour}:${minute}`
          break
        default:
          defaultValue = null
      }
    }

    return (
      <TextField
        type={type}
        defaultValue={defaultValue}
        {...props}
      />
    )
  }
}

DateTime.propTypes = {
  defaultCurrentDateTime: PropTypes.bool
}

DateTime.defaultProps = {
  defaultCurrentDateTime: false
}

export default DateTime
