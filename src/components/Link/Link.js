import React, { PureComponent, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { launchPalette } from '../../themes/themeLaunch'

// TODO: replace <Fragment /> with react-router link component, or router of choice
// import ReactLink from 'react-router-dom/Link'

class Link extends PureComponent {
  render() {
    const { children, classes, color } = this.props
    const allClasses = classnames(classes.root, classes[color])
    return (
      <span className={allClasses}>
        {children}
      </span>
    )
  }
}

const styles = theme => {
  const { primary, secondary, text } = theme.palette
  return {
    root: {
      textDecoration: 'underline',
      color: text.primary,
      '&:hover': {
        cursor: 'pointer'
      }
    },
    primary: {
      color: primary.main,
    },
    secondary: {
      color: secondary.main,
    }
  }
}

const LinkContainer = withStyles(styles)(Link)

LinkContainer.propTypes = {
  color: PropTypes.string
}

LinkContainer.defaultProps = {
  color: launchPalette.black
}

export default LinkContainer
