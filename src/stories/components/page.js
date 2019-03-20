import React from 'react'
import { addDecorator, storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import PageWrapper, { PageTitle, PageFooter, PageContent } from '../../components/Page'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
    .add('Default Full Page', () => (
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
    .add('Full Page with Breakpoints', () => (
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
  .add('Header', () => (
      <Header style={styleBorder}>
        Header
      </Header>
    ))
  .add('Footer', () => (
      <Footer style={styleBorder}>
        Footer
      </Footer>
    ))
  .add('PageWrapper', () => (
      <PageWrapper style={styleBorder}>
        Page Wrapper
      </PageWrapper>
    ),
    { notes: 'The Page Wrapper...' }
  )
  .add('PageTitle', () => (
      <PageTitle style={styleBorder}>
        Page Title
      </PageTitle>
    ),
    { notes: 'The Page Title...' }
  )
  .add('PageContent', () => (
      <PageContent style={styleBorder}>
        Page Content
      </PageContent>
    ),
    { notes: 'The Page Content...' }
  )
  .add('PageFooter', () => (
      <PageFooter style={styleBorder}>
        Page Footer
      </PageFooter>
    ),
    { notes: 'The Page Footer appears at the bottom of the page, above the global Footer (if used).' }
  )
)
