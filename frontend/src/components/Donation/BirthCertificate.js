import { Button, FormControl, makeStyles } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
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

const BirthCertificate = ({ setBirthImg }) => {
  const classes = useStyles()

  const [fileName, setFileName] = useState(null)

  const handleChange = (e) => {
    // Get The File

    let selected = e.target.files[0]

    if (selected) {
      setBirthImg(selected)
      setFileName(selected.name)
    } else {
      setBirthImg(null)
    }
  }

  return (
    <FormControl fullWidth variant='outlined' className={classes.formControl}>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file2'
        multiple
        type='file'
        onChange={handleChange}
      />
      <label htmlFor='contained-button-file2'>
        <Button
          endIcon={<PhotoCamera />}
          fullWidth
          variant='outlined'
          color='primary'
          component='span'
        >
          {fileName ? fileName : 'Upload Birth Certificate'}
        </Button>
      </label>
    </FormControl>
  )
}

export default BirthCertificate
