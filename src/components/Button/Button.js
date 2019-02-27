import React, { PureComponent } from 'react'
import MUIButton from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { launchPalette } from '../../themes/themeLaunch'

class Button extends PureComponent {
  render() {
    const { children, classes, ...props } = this.props
    return (
      <MUIButton
        classes={{
          root: classes.root,
          label: classes.label,
          text: classes.text,
          outlined: classes.outlined,
          textPrimary: classes.textPrimary,
        }}
        {...props}
      >
        {children}
      </MUIButton>
    )
  }
}

const styles = theme => {
  const { primary } = theme.palette
  return {
    root: {

    },
    label: {
      // Styles applied to the span element that wraps the children.
    },
    text: {
      // Styles applied to the root element if variant="text"
    },
    textPrimary: {
      // Styles applied to the root element if variant="text" and color="primary"
    },
    outlined: {
      // Styles applied to the root element if variant="outlined"
      borderWidth: '1px'
    }
  }
}

const ButtonContainer = withStyles(styles)(Button)

ButtonContainer.propTypes = {
  color: PropTypes.string,
  children: PropTypes.object
}

ButtonContainer.defaultProps = {
  color: launchPalette.black
}

export default ButtonContainer
