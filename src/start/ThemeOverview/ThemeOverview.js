import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import ThemeSwitcher from '../ThemeSwitcher'
import ControlWrapper from './ControlWrapper'

import Paper from '@material-ui/core/Paper'

import Button from '../../components/Button'
import Link from '../../components/Link'
import Typography from '@material-ui/core/Typography'

class ThemeOverview extends Component {
  render() {
    const { classes } = this.props
    return (
      <ThemeSwitcher showCode>
        <Typography variant="h2" className={classes.title}>Alternate Themes</Typography>

        <Paper className={classes.paper}>

          <Typography variant="h4">Buttons</Typography>
          <hr/>
          <ControlWrapper>
            <Button>Default Button</Button>
            <Button variant="contained" color="primary">Launch MUI Installed</Button>
            <Button variant="text" color="primary">Primary Text Button</Button>
          </ControlWrapper>
          <ControlWrapper>
          <Button variant="contained" color="secondary">Secondary Contained Button</Button>
          <Button variant="text" color="secondary">Secondary Text Button</Button>
          </ControlWrapper>

          <Typography variant="h4">Links</Typography>
          <hr/>
          <ControlWrapper>
            <Link>Default Link</Link><br/>
            <Link color="primary">Primary Link</Link><br/>
            <Link color="secondary">Secondary Link</Link><br/>
          </ControlWrapper>

          <Typography variant="h4">Typography</Typography>
          <hr/>
          <Typography variant="h1">h1. Heading</Typography>
          <Typography variant="h2">h2. Heading</Typography>
          <Typography variant="h3">h3. Heading</Typography>
          <Typography variant="h4">h4. Heading</Typography>
          <Typography variant="h5">h5. Heading</Typography>
          <Typography variant="h6">h6. Heading</Typography>
          <Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
          <Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
          <Typography variant="body1">
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2">
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="button">button text</Typography>
          <Typography variant="caption">caption text</Typography>
          <Typography variant="overline">overline text</Typography>
        </Paper>

        <Typography variant="h2" className={classes.title}>Theme Config Object</Typography>
      </ThemeSwitcher>
    )
  }
}

const styles = theme => {
  const { palette } = theme
  return {
    paper: {
      padding: '50px 20px'
    },
    title:  {
      color: '#000',
      fontFamily: 'Roboto',
    }
  }
}

export default withStyles(styles)(ThemeOverview)
