# Launch UI
A Boilerplate Launch UI React Component Library based on Material UI

### Criteria for creating a Launch UI Component

- [ ] Component is UI related
- [ ] A common need across projects for component
- [ ] Component is built generic enough that it can be used by simply passing properties
- [ ] If creating a wrapper on a 3rd party library (such as MUI), wrapper component must be warranted and add value

### Material UI Components

Using version: 3.9.2

All MUI components are accessible using the recommendations listed in their API.  If a component is not listed, use it directly from the MUI library.

## Custom Components

The following components are custom components created by Launch. They may, or may not, include additional libraries.

- [Autocomplete](https://material-ui.com/demos/autocomplete/)
  - Not yet developed
  - No naitive component.  Multiple libraries are recommended in MUI. Launch wrapper component uses [react-select](https://react-select.com/home).
- Page
  - PageWrapper
    - Leverages MUI CssBaseline
    - allows for a full bleed design
  - PageTitle
    - Page title/hero
  - PageSubTitle
    - Page subtitle
  - PageContent
    - Main body content for Page
- Header
  - Global header
- Footer
  - Global footer
- DateTime
  - native uses html5
- Notification Manager
  - Not yet developed. Leverage from the [data 360](https://github.com/LaunchCG/data360-demo-web/blob/feature/context-based-alerts/src/NotificationSystem/NotificationSystem.js) project.
