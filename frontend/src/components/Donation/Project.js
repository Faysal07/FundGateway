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

const Project = ({ subCategory, project, setProject }) => {
  const classes = useStyles()
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/project/')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log('pp', data)

  if (!data) return 'Loading...'

  const handleChange = (event) => {
    setProject(event.target.value)
  }

  let filteredData = data

  if (subCategory !== '') {
    filteredData = data.filter((item) => item.subcat_id === subCategory)
  }

  return (
    <FormControl fullWidth variant='outlined' className={classes.formControl}>
      <InputLabel id='roject'>Project</InputLabel>
      <Select
        labelId='pategory'
        id='pategory'
        value={project}
        onChange={handleChange}
        label='Project'
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {filteredData.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Project
