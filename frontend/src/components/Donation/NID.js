import { Button, FormControl, makeStyles } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Tesseract from 'tesseract.js'

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

const NID = ({
  setNid,
  nidImg,
  setNidImg,
  setNidImgFile,
  setLoading,
  setNidValid,
}) => {
  const [data, setData] = useState([])

  const verifyNid = (text) => {
    const found = data.find((item) =>
      text.toLowerCase().includes(item.nid_number)
    )

    if (found) {
      setNid(found.nid_number)
      setNidValid('Valid')
    } else {
      setNidValid('Not Valid')
      setNid('')
    }
  }

  const convertImageToText = async () => {
    setLoading(true)
    setNidValid('Validating')
    const result = await Tesseract.recognize(nidImg, 'eng')

    verifyNid(result.data.text)
    setLoading(false)
  }

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/nid/')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    if (nidImg !== '') {
      convertImageToText()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nidImg])

  console.log('nid', data)

  const [fileName, setFileName] = useState(null)

  const handleChange = (e) => {
    // Get The File

    let selected = e.target.files[0]

    if (selected) {
      setNidImg(URL.createObjectURL(selected))
      setNidImgFile(selected)
      setFileName(selected.name)
    } else {
      setNidImg(null)
      setNidImgFile(null)
    }
  }

  const classes = useStyles()
  return (
    <FormControl fullWidth variant='outlined' className={classes.formControl}>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file1'
        multiple
        type='file'
        onChange={handleChange}
      />
      <label htmlFor='contained-button-file1'>
        <Button
          endIcon={<PhotoCamera />}
          fullWidth
          variant='outlined'
          color='primary'
          component='span'
        >
          {fileName ? fileName : 'Upload NID image'}
        </Button>
      </label>
    </FormControl>
  )
}

export default NID
