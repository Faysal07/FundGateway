import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const Category = ({ category, setCategory }) => {
  const classes = useStyles()
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/category/')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(data)

  if (!data) return 'Loading...'

  const handleChange = (event) => {
    setCategory(event.target.value)
  }

  return (
    <FormControl fullWidth variant='outlined' className={classes.formControl}>
      <InputLabel id='category'>Category</InputLabel>
      <Select
        labelId='category'
        id='category'
        value={category}
        onChange={handleChange}
        label='Category'
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {data.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.cat_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Category
