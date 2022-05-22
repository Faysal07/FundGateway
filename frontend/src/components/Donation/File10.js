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

const File10 = ({ setFile10 }) => {
  const classes = useStyles()

  const [fileName, setFileName] = useState(null)

  const handleChange = (e) => {
    // Get The File

    let selected = e.target.files[0]

    if (selected) {
      setFile10(selected)
      setFileName(selected.name)
    } else {
      setFile10(null)
    }
  }

  return (
    <FormControl fullWidth variant='outlined' className={classes.formControl}>
      <input
        className={classes.input}
        id='file10'
        multiple
        type='file'
        onChange={handleChange}
      />
      <label htmlFor='file10'>
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

export default File10
