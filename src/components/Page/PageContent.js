import React, { PureComponent, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import PageContext from './PageContext'
import PropTypes from 'prop-types'

class PageContent extends PureComponent {
  render() {
    const {
      classes,
      rootClass,
      fullBleedClass,
      contentClass,
      children,
      fullBleed,
      flexGrow,
      style,
      breakpoints,
      ...props } = this.props

    let fullBleedClasses = {}
    if (fullBleed || fullBleedClass) {
      fullBleedClasses = classNames(classes.fullBleed, fullBleedClass)
    }

    const contentClasses = classNames(
      (breakpoints) ? classes.contentBreakpoints : null,
      contentClass || classes.content
    )

    const rootStyle = {
      flexGrow: flexGrow.toString() || 1
    }

    return (
      <PageContext.Consumer>
        {pageContext => (
          <section
            className={classNames(classes.root, fullBleedClasses)}
            style={rootStyle}
            {...props}
          >
            <div className={contentClasses} style={style}>
              {children}
            </div>
          </section>
        )}
      </PageContext.Consumer>
    )
  }
}

const styles = theme => {
  const { palette } = theme
  const { xs, sm, md, lg, xl } = theme.breakpoints.values

  return {
    root: {
      width: '100%'
    },
    fullBleed: {
      width: '100%'
    },
    content: {
      width: 'auto'
    },
    contentBreakpoints: {
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

const PageContentContainer = withStyles(styles)(PageContent)

PageContentContainer.propTypes = {
  fullBleedClass: PropTypes.string,
  contentClass: PropTypes.string,
  fullBleed: PropTypes.bool,
  flexGrow: PropTypes.number,
  breakpoints: PropTypes.bool
}

PageContentContainer.defaultProps = {
  fullBleedClass: '',
  contentClass: '',
  fullBleed: false,
  flexGrow: 1,
  breakpoints: false
}

export default PageContentContainer
