import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PageContent from './PageContent'
import PropTypes from 'prop-types'

class PageTitle extends PureComponent {
  render() {
    const {
      classes,
      fullBleed,
      children,
      ...props
    } = this.props

    return (
      <PageContent
        fullBleed={fullBleed}
        flexGrow='0'
        {...props}
      >
        {children}
      </PageContent>
    )
  }
}

PageTitle.propTypes = {
  fullBleedClass: PropTypes.string,
  contentClass: PropTypes.string,
  fullBleed: PropTypes.bool,
  flexGrow: PropTypes.number,
  breakpoints: PropTypes.bool
}

PageTitle.defaultProps = {
  fullBleedClass: '',
  contentClass: '',
  fullBleed: false,
  flexGrow: 0,
  breakpoints: false
}

export default PageTitle
