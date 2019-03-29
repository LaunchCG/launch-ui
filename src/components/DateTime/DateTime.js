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
      const year = date.getFullYear().toString().padStart(4, 0)
      const month = (date.getMonth() + 1).toString().padStart(2, 0)
      const day = date.getDate().toString().padStart(2, 0)
      const hour = date.getHours().toString().padStart(2, 0)
      const minute = date.getMinutes().toString().padStart(2, 0)

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
        InputLabelProps={{
            shrink: true,
          }}
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
