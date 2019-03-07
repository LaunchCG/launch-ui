import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PageContent from './PageContent'
import PropTypes from 'prop-types'

class PageFooter extends PureComponent {
  render() {
    const {
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

PageFooter.propTypes = {
  fullBleed: PropTypes.bool,
  flexGrow: PropTypes.number
}

PageFooter.defaultProps = {
  fullBleed: false,
  flexGrow: 0
}

export default PageFooter
