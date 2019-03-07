import React, { PureComponent, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import PageContext, { defaultValue } from './PageContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import PropTypes from 'prop-types'

class PageWrapper extends PureComponent {
  render() {
    const {
      classes,
      mainClass,
      children,
      fullBleed,
      ...props } = this.props

    const context = {
      ...defaultValue,
      fullBleed
    }

    return (
      <Fragment>
        <CssBaseline />
        <main className={classNames(classes.root, mainClass)} {...props}>
          <PageContext.Provider value={context}>
            {children}
          </PageContext.Provider>
        </main>
      </Fragment>
    )
  }
}

const styles = theme => {
	const { background } = theme.palette
  return {
    root: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }
}

const PageWrapperContainer = withStyles(styles)(PageWrapper)

PageWrapperContainer.propTypes = {
  mainClass: PropTypes.string,
  fullBleed: PropTypes.bool
}

PageWrapperContainer.defaultProps = {
  mainClass: '',
  fullBleed: false
}

export default PageWrapperContainer
