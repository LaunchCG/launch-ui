import React, { PureComponent, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { palette } from '../../themes/themeLaunch'

// TODO: replace <Fragment /> with react-router link component, or router of choice
// import ReactLink from 'react-router-dom/Link'

class Link extends PureComponent {
  render() {
    const { children, classes, color, contrast } = this.props
    let colorClass = color
    if (contrast) {
      colorClass = `${color}Contrast`
    }
    const allClasses = classnames(classes.root, classes[colorClass])
    return (
      <a href={this.props.to} className={allClasses}>
        {children}
      </a>
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
    },
    primaryContrast: {
      color: theme.palette.getContrastText(primary.main)
    },
    secondaryContrast: {
      color: theme.palette.getContrastText(secondary.main)
    }
  }
}

const LinkContainer = withStyles(styles)(Link)

LinkContainer.propTypes = {
  color: PropTypes.string
}

LinkContainer.defaultProps = {
  color: palette.black
}

export default LinkContainer
