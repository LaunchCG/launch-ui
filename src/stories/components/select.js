import React from 'react'
import { storiesOf, configure, addDecorator } from '@storybook/react'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'

export default (
  storiesOf('MUI Select', module)
    .add('Default', () => (
      <FormControl style={{width: '200px'}}>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
    ))
    .add('Outline', () => (
      <FormControl variant="outlined" style={{width: '200px'}}>
          <InputLabel
            htmlFor="outlined-age-simple"
          >
            Age
          </InputLabel>
          <Select
            input={
              <OutlinedInput
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
    ))
    .add('Filled', () => (
      <FormControl variant="filled" style={{width: '200px'}}>
          <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
          <Select
            input={<FilledInput name="age" id="filled-age-simple" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
    ))
)
