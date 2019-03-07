import React from 'react'

const defaultValue = {
  fullBleed: true
}

const PageContext = React.createContext(defaultValue)

export default PageContext

export { defaultValue, PageContext }
