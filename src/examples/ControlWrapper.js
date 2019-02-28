import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'

class ControlWrapper extends PureComponent {
  render() {
    const { children, classes } = this.props
    return (
      <div className={classes.wrapper}>{children}</div>
    )
  }
}

const styles = theme => {
  return {
    wrapper: {
      display: 'block',
      margin: '20px 0'
    }
  }
}

export default withStyles(styles)(ControlWrapper)
