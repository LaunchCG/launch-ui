import React from 'react'
import { addDecorator, storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import PageWrapper, { PageTitle, PageFooter, PageContent } from '../../src/components/Page'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

const pageWidth = {
  xl: '95%',
  lg: '85%',
  md: '75%',
  sm: '60%'
}

addDecorator(withNotes)

const styleBorder = {
    border: 'solid #000 1px',
    marginTop: '5px',
    marginBottom: '5px',
    padding: '20px 5px',
    backgroundColor: 'rgba(0, 0, 0, .05)'
  }

export default (
  storiesOf('Page', module)
    .addWithJSX('Default Full Page', () => (
      <div>
        <Header style={styleBorder}>
          Header
        </Header>
        <span style={{color: 'rgb(200,0,0)'}}>Page Wrapper</span>
        <PageWrapper style={{
            border: 'solid rgb(200,0,0) 3px',
            margin: '5px 0px',
            padding: '5px 2px'
          }}>
          <PageTitle style={styleBorder}>
            Page Title
          </PageTitle>
          <PageContent style={styleBorder}>
            Page Content
          </PageContent>
          <PageFooter style={styleBorder}>
            Page Footer
          </PageFooter>
        </PageWrapper>
        <Footer style={styleBorder}>
          Footer
        </Footer>
      </div>
    ))
    .addWithJSX('Full Page with Breakpoints', () => (
      <div>
        <Header style={styleBorder} breakpoints>
          Header
        </Header>
        <span style={{color: 'rgb(200,0,0)'}}>Page Wrapper</span>
        <PageWrapper style={{
            border: 'solid rgb(200,0,0) 3px',
            margin: '5px 0px',
            padding: '5px 2px'
          }}>
          <PageTitle style={styleBorder} breakpoints>
            Page Title
          </PageTitle>
          <PageContent style={styleBorder} breakpoints>
            Page Content
          </PageContent>
          <PageFooter style={styleBorder} breakpoints>
            Page Footer
          </PageFooter>
        </PageWrapper>
        <Footer style={styleBorder} breakpoints>
          Footer
        </Footer>
      </div>
    ))
  .addWithJSX('Header', () => (
      <Header style={styleBorder}>
        Header
      </Header>
    ))
  .addWithJSX('Footer', () => (
      <Footer style={styleBorder}>
        Footer
      </Footer>
    ))
  .addWithJSX('PageWrapper', () => (
      <PageWrapper style={styleBorder}>
        Page Wrapper
      </PageWrapper>
    ),
    { notes: 'The Page Wrapper...' }
  )
  .addWithJSX('PageTitle', () => (
      <PageTitle style={styleBorder}>
        Page Title
      </PageTitle>
    ),
    { notes: 'The Page Title...' }
  )
  .addWithJSX('PageContent', () => (
      <PageContent style={styleBorder}>
        Page Content
      </PageContent>
    ),
    { notes: 'The Page Content...' }
  )
  .addWithJSX('PageFooter', () => (
      <PageFooter style={styleBorder}>
        Page Footer
      </PageFooter>
    ),
    { notes: 'The Page Footer appears at the bottom of the page, above the global Footer (if used).' }
  )
)
