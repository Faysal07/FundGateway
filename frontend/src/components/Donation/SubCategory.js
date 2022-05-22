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

const SubCategory = ({ category, subCategory, setSubCategory }) => {
  const classes = useStyles()
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/subcategory/')
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
    setSubCategory(event.target.value)
  }

  let filteredData = data

  if (category !== '') {
    filteredData = data.filter((item) => item.category_id === category)
  }

  return (
    <FormControl fullWidth variant='outlined' className={classes.formControl}>
      <InputLabel id='subCategory'>Sub Category</InputLabel>
      <Select
        labelId='subCategory'
        id='subCategory'
        value={subCategory}
        onChange={handleChange}
        label='Sub Category'
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {filteredData.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SubCategory
