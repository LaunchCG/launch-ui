![Launch](/images/launch-logo-white.svg)

# Launch UI
A Boilerplate Launch UI React Component Library based on Material UI

### Criteria for creating a Launch UI Component

- [ ] Component is UI related
- [ ] A common need across projects for component
- [ ] Component is built generic enough that it can be used by simply passing properties
- [ ] If creating a wrapper on a 3rd party library (such as MUI), wrapper component must be warranted and add value


Should we add these criteria?

- [ ] Does/Does not require redux

## Material UI Components

Using version: 3.9.2

All MUI components are accessible using the recommendations listed in their API.  Some components have custom wrapper components.  Custom wrapper components have descriptions below.  If a component is not listed, or does not have a description, use it directly from the MUI library.

- [App Bar](https://material-ui.com/demos/app-bar/)
- [Autocomplete](https://material-ui.com/demos/autocomplete/)
  - No naitive component.  Multiple libraries are recommended in MUI. Launch wrapper component uses [react-select](https://react-select.com/home).
- [Avatars](https://material-ui.com/demos/avatars/)
- [Badges](https://material-ui.com/demos/badges/)
- Bottom Navigation
- Buttons
- Cards
- Checkbox
- Chips
- CirclularProgress
- CssBaseline
- Dialogs
- Dividers
- Drawers
- Expansion Panels
- Grid List
- Lists
- Menus
- Paper
- Pickers
- Popover
- Progress
- Radio
- Selection Controls
- Selects
- Snackbars
- Steppers
- Switch
- Tables
- Tabs
- Text Fields
- Tooltips
- [Transitions](https://material-ui.com/utils/transitions/)

## Custom Components

The following components are custom components created by Launch. They may, or may not, include additional libraries.

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
  - uses html5
- Link
  - Dependent on react-router

### Questionable

The following components need discussion as to whether or not they deserve a wrapper component

- Dialog -> Modal
  - Do we want to include redux dependent components?
- Notification Manager
  - Do we want to include redux dependent components?
- Markdown
