import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import PropTypes from 'prop-types'

class Header extends PureComponent {
  render() {
    const {
      classes,
      headerClass,
      fullBleedClass,
      fullBleed,
      children,
      breakpoints,
      ...props } = this.props

    let fullBleedClasses = {}
    if (fullBleed || fullBleedClass) {
      fullBleedClasses = classNames(classes.fullBleed, fullBleedClass)
    }

    const headerClasses = classNames(
      (breakpoints) ? classes.headerBreakpoints : null,
      headerClass || classes.header
    )

    return(
      <div className={fullBleedClasses}>
        <header className={headerClasses} {...props}>
          {children}
        </header>
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
    header: {
      width: 'auto'
    },
    headerBreakpoints: {
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

const HeaderContainer = withStyles(styles)(Header)

HeaderContainer.propTypes = {
  headerClass: PropTypes.string,
  fullBleedClass: PropTypes.string,
  fullBleed: PropTypes.bool,
  breakpoints: PropTypes.bool
}

HeaderContainer.defaultProps = {
  headerClass: '',
  fullBleedClass: '',
  fullBleed: false,
  breakpoints: false
}

export default HeaderContainer
