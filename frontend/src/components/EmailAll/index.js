import {
  Container,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import FilteredMails from './FilteredMails'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const Email = () => {
  const classes = useStyles()
  const [sub, setSub] = useState([])
  const [category, setCategory] = useState('')

  const handleChange = (event) => {
    setCategory(event.target.value)
  }

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/subcategory/')
      .then((res) => {
        setSub(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log({ sub })
  if (!sub) return 'Loading...'
  return (
    <Container maxWidth='sm'>
      <FormControl fullWidth variant='filled' className={classes.formControl}>
        <InputLabel id='demo-simple-select-filled-label'>
          Select Sub Category
        </InputLabel>
        <Select
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          value={category}
          onChange={handleChange}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>

          {sub.map((item) => (
            <MenuItem key={item.id} value={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
        <br />
        {category !== '' && <FilteredMails category={category} />}
      </FormControl>
    </Container>
  )
}

export default Email
