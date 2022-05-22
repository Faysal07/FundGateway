import { Button, FormControl, makeStyles } from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}))

const File7 = ({ setFile7 }) => {
  const classes = useStyles()

  const [fileName, setFileName] = useState(null)

  const handleChange = (e) => {
    // Get The File

    let selected = e.target.files[0]

    if (selected) {
      setFile7(selected)
      setFileName(selected.name)
    } else {
      setFile7(null)
    }
  }

  return (
    <FormControl fullWidth variant='outlined' className={classes.formControl}>
      <input
        className={classes.input}
        id='file7'
        multiple
        type='file'
        onChange={handleChange}
      />
      <label htmlFor='file7'>
        <Button
          endIcon={<AttachFileIcon />}
          fullWidth
          variant='outlined'
          color='primary'
          component='span'
        >
          {fileName ? fileName : 'Upload File'}
        </Button>
      </label>
    </FormControl>
  )
}

export default File7
