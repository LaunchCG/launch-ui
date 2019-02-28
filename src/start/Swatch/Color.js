import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

class Color extends Component {
  render() {

    const { classes, color, name } = this.props
    const allClasses = classnames(classes.color, classes[color])
    const style = {
      backgroundColor: color
    }
    return (
      <div className={classes.root}>
        <div className={allClasses} style={style} />
        <div className={classes.caption}>
          {name}<br/>
          {color}
        </div>
      </div>
    )
  }
}

const styles = theme => {
  const { palette } = theme
  return {
    root: {
      width: '100px',
      margin: '15px',
      display: 'inline-block'
    },
    color: {
      height: '100px',
      width: '100%',
      borderRadius: '50%'
    },
    caption: {
      textAlign: 'center'
    },
    primary: {
      //backgroundColor: palette.primary.main
    },
    secondary: {
      //backgroundColor: palette.secondary.main
    }
  }
}

export default withStyles(styles)(Color)
