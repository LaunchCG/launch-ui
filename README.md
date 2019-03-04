# Launch UI
A Boilerplate Launch UI React Component Library based on Material UI

## Material UI Components

Using version: 3.9.2

All MUI components are accessible using the recommendations listed in their API.  Some components have custom wrapper components.  Custom wrapper components have descriptions below.  If a component is not listed, or does not have a description, use it directly from the MUI library.

- [App Bar](https://material-ui.com/demos/app-bar/)
- [Autocomplete](https://material-ui.com/demos/autocomplete/)
  - No naitive component.  Multiple libraries are recommended in MUI. Launch wrapper component uses [react-select](https://react-select.com/home).
- [Avatars](https://material-ui.com/demos/avatars/)
- Backdrop
- [Badges](https://material-ui.com/demos/badges/)
- Bottom Navigation
- Buttons
- Cards
- Checkbox
- Chips
- CirclularProgress
- Collapse
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
- Progress
- Selection Controls
- Selects
- Snackbars
- Steppers
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
- Link
- Markdown


## Questionable

The following components need discussion as to whether or not they deserve a wrapper component

- Dialog -> Modal
- Notification Manager
  - Do we want to include redux dependent components?
