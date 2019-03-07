import React from 'react'
import { addDecorator, storiesOf } from '@storybook/react'
import PageWrapper, { PageTitle, PageFooter, PageContent } from '../../src/components/Page'
import { withNotes } from '@storybook/addon-notes'

const pageWidth = {
  xl: '95%',
  lg: '85%',
  md: '75%',
  sm: '60%'
}

addDecorator(withNotes)

export default (
  storiesOf('Page', module)
    .addWithJSX('Summary', () => (
      <div>
        Page Wrapper
        <PageWrapper style={{
            border: 'solid #999 1px',
            margin: '5px 0px',
            padding: '5px 2px'
          }}>
          <PageTitle style={{
              border: 'solid #000 1px',
              margin: '5px 0px',
              padding: '5px 0px'
            }}>
            Page Title
          </PageTitle>
          <PageContent style={{
              border: 'solid #000 1px',
              margin: '5px 0px',
              padding: '5px 0px'
            }}>
            Page Content
          </PageContent>
          <PageFooter style={{
              border: 'solid #000 1px',
              margin: '5px 0px',
              padding: '5px 0px'
            }}>
            Page Footer
          </PageFooter>
        </PageWrapper>
      </div>
    ))
  .addWithJSX('PageWrapper', () => (
      <PageWrapper style={{
          border: 'solid #000 1px',
          margin: '5px 0px',
          padding: '5px 0px'
        }}>
        Page Wrapper
      </PageWrapper>
    ),
    { notes: 'The Page Wrapper...' }
  )
  .addWithJSX('PageTitle', () => (
      <PageTitle style={{
          border: 'solid #000 1px',
          margin: '5px 0px',
          padding: '5px 0px'
        }}>
        Page Title
      </PageTitle>
    ),
    { notes: 'The Page Title...' }
  )
  .addWithJSX('PageContent', () => (
      <PageContent style={{
          border: 'solid #000 1px',
          margin: '5px 0px',
          padding: '5px 0px'
        }}>
        Page Content
      </PageContent>
    ),
    { notes: 'The Page Content...' }
  )
  .addWithJSX('PageFooter', () => (
      <PageFooter style={{
          border: 'solid #000 1px',
          margin: '5px 0px',
          padding: '5px 0px'
        }}>
        Page Footer
      </PageFooter>
    ),
    { notes: 'The Page Footer appears at the bottom of the page, above the global Footer (if used).' }
  )
)
