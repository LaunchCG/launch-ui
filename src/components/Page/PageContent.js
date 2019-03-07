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
      ...props } = this.props

    let fullBleedClasses = {}
    if (fullBleed || fullBleedClass) {
      fullBleedClasses = classNames(classes.fullBleed, fullBleedClass)
    }

    // use either the default content class with breakpoints, or override with class in props
    let contentClasses = classes.content
    if (contentClass) {
      contentClasses = contentClass
    }

    const rootStyle = {
      flexGrow: flexGrow || 1
    }

    return (
      <PageContext.Consumer>
        {pageContext => (
          <section
            className={classNames(classes.root, rootClass)}
            style={rootStyle}
            {...props}
          >
            <div className={fullBleedClasses}>
              <div className={contentClasses}>
                {children}
              </div>
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
      width: '100%',
      backgroundColor: palette.background.default
    },
    fullBleed: {
      width: '100%'
    },
    content: {
      width: 'auto',
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
  rootClass: PropTypes.string,
  fullBleedClass: PropTypes.string,
  contentClass: PropTypes.string,
  fullBleed: PropTypes.bool,
  flexGrow: PropTypes.number
}

PageContentContainer.defaultProps = {
  rootClass: '',
  fullBleedClass: '',
  contentClass: '',
  fullBleed: false,
  flexGrow: 1
}

export default PageContentContainer
