import React, { PureComponent, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'

// TODO: replace <Fragment /> with react-router link component, or router of choice
// import ReactLink from 'react-router-dom/Link'

class Link extends PureComponent {
  render() {
    const { children, classes } = this.props
    console.log('pops',this.props);
    return (
      <span className={classes.base}>
        {children}
      </span>
    )
  }
}

const styles = theme => {
  const { primary } = theme.palette
  return {
    base: {
      textDecoration: 'underline',
      color: primary.main,
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }
}

export default withStyles(styles)(Link)
