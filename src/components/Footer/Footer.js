import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import PropTypes from 'prop-types'

class Footer extends PureComponent {
  render() {
    const {
      classes,
      footerClass,
      fullBleedClass,
      fullBleed,
      children,
      breakpoints,
      ...props } = this.props

    let fullBleedClasses = {}
    if (fullBleed || fullBleedClass) {
      fullBleedClasses = classNames(classes.fullBleed, fullBleedClass)
    }

    const footerClasses = classNames(
      (breakpoints) ? classes.footerBreakpoints : null,
      footerClass || classes.footer
    )

    return(
      <div className={fullBleedClasses}>
        <footer className={footerClasses} {...props}>
          {children}
        </footer>
      </div>
    )
  }
}

const styles = theme => {
  const { xs, sm, md, lg, xl } = theme.breakpoints.values
  return {
    fullBleed: {
      width: '100%'
    },
    footer: {
      width: 'auto'
    },
    footerBreakpoints: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(xs + theme.spacing.unit * 3 * 2)]: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      [theme.breakpoints.up(sm + theme.spacing.unit * 3 * 2)]: {
        width: sm
      },
      [theme.breakpoints.up(md + theme.spacing.unit * 3 * 2)]: {
        width: md
      },
      [theme.breakpoints.up(lg + theme.spacing.unit * 3 * 2)]: {
        width: lg
      },
      [theme.breakpoints.up(xl + theme.spacing.unit * 3 * 2)]: {
        width: xl
      }
    }
  }
}

const FooterContainer = withStyles(styles)(Footer)

FooterContainer.propTypes = {
  footerClass: PropTypes.string,
  fullBleedClass: PropTypes.string,
  fullBleed: PropTypes.bool,
  breakpoints: PropTypes.bool
}

FooterContainer.defaultProps = {
  footerClass: '',
  fullBleedClass: '',
  fullBleed: false,
  breakpoints: false
}

export default FooterContainer
