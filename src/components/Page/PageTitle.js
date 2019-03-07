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
  fullBleed: PropTypes.bool,
  flexGrow: PropTypes.number
}

PageTitle.defaultProps = {
  fullBleed: false,
  flexGrow: 0
}

export default PageTitle
