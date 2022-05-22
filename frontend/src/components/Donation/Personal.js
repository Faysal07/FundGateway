import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import NID from './NID'
import BirthCertificate from './BirthCertificate'
import File1 from './File1'
import File2 from './File2'
import File3 from './File3'
import File4 from './File4'
import File5 from './File5'
import { LinearProgress } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import axios from 'axios'
import File6 from './File6'
import File7 from './File7'
import File8 from './File8'
import File9 from './File9'
import File10 from './File10'
import ThankYouRequest from './ThankYouRequest'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: theme.palette.primary.main,
  },
}))

export default function Personal({ type }) {
  const classes = useStyles()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [zip, setZip] = useState('')
  const [amount, setAmount] = useState('')
  const [nid, setNid] = useState('')
  const [nidImg, setNidImg] = useState('')
  const [nidImgFile, setNidImgFile] = useState('')
  const [bid, setBid] = useState('')
  const [cause, setCause] = useState('')
  const [description, setDescription] = useState('')
  const [birthImg, setBirthImg] = useState('')
  const [file1, setFile1] = useState('')
  const [file2, setFile2] = useState('')
  const [file3, setFile3] = useState('')
  const [file4, setFile4] = useState('')
  const [file5, setFile5] = useState('')
  const [file6, setFile6] = useState('')
  const [file7, setFile7] = useState('')
  const [file8, setFile8] = useState('')
  const [file9, setFile9] = useState('')
  const [file10, setFile10] = useState('')
  const [fileCount, setFileCount] = useState(1)

  const [or, setOr] = useState(true)
  const [loading, setLoading] = useState(false)
  const [nidValid, setNidValid] = useState('')

  const [open, setOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      type,
      firstName,
      lastName,
      email,
      zip,
      nid,
      bid,
      amount,
      cause,
      description,
      birthImg,
      file1,
      file2,
      file3,
      file4,
      file5,
      file6,
      file7,
      file8,
      file9,
      file10,
    })

    const formData = new FormData()
    formData.append('type', type)
    formData.append('f_name', firstName)
    formData.append('l_name', lastName)
    formData.append('email', email)
    formData.append('zip_code', zip)
    formData.append('img', nidImgFile)
    formData.append('nid_number', nid)
    formData.append('cause', cause)
    formData.append('donation_amount', amount)
    formData.append('description', description)
    formData.append('file1', file1)
    formData.append('file2', file2)
    formData.append('file3', file3)
    formData.append('file4', file4)
    formData.append('file5', file5)
    formData.append('file6', file6)
    formData.append('file7', file7)
    formData.append('file8', file8)
    formData.append('file9', file9)
    formData.append('file10', file10)

    axios
      .post('http://127.0.0.1:8000/api/request/', formData)
      .then((res) => {
        console.log(res)
        setOpen(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='fname'
              name='firstName'
              variant='outlined'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='lname'
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='zip'
              label='Zip Code'
              name='zip'
              autoComplete='zip'
              onChange={(e) => setZip(e.target.value)}
            />
          </Grid>

          {or ? (
            <>
              <Grid item xs={12}>
                <NID
                  setNid={setNid}
                  nidImg={nidImg}
                  nidImgFile={nidImgFile}
                  setNidImgFile={setNidImgFile}
                  setNidImg={setNidImg}
                  setLoading={setLoading}
                  setNidValid={setNidValid}
                />
                {loading === true && <LinearProgress />}
                {nidValid !== '' && (
                  <Alert
                    severity={
                      nidValid === 'Validating'
                        ? 'info'
                        : nidValid === 'Valid'
                        ? 'success'
                        : 'error'
                    }
                  >
                    {nidValid}
                  </Alert>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  disabled
                  variant='outlined'
                  required
                  fullWidth
                  id='nid'
                  label='NID Number'
                  name='nid'
                  value={nid}
                  onChange={(e) => setNid(e.target.value)}
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <BirthCertificate setBirthImg={setBirthImg} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  value={bid}
                  id='bid'
                  label='Birth Certificate ID'
                  name='bid'
                  onChange={(e) => setBid(e.target.value)}
                />
              </Grid>
            </>
          )}

          <Grid item xs={12}>
            <Typography
              align='right'
              color='primary'
              variant='subtitle2'
              style={{ cursor: 'pointer' }}
              onClick={() => setOr((prev) => !prev)}
            >
              {or ? `Don't have a NID?` : `Don't have a Birth Certificate?`}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              label='Cause'
              name='cause'
              onChange={(e) => setCause(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              label='Donation amount'
              name='amount'
              onChange={(e) => setAmount(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              label='Proper Description'
              name='description'
              multiline
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          {fileCount > 0 && (
            <Grid item xs={12}>
              <File1 setFile1={setFile1} />
            </Grid>
          )}
          {fileCount > 1 && (
            <Grid item xs={12}>
              <File2 setFile2={setFile2} />
            </Grid>
          )}
          {fileCount > 2 && (
            <Grid item xs={12}>
              <File3 setFile3={setFile3} />
            </Grid>
          )}
          {fileCount > 3 && (
            <Grid item xs={12}>
              <File4 setFile4={setFile4} />
            </Grid>
          )}
          {fileCount > 4 && (
            <Grid item xs={12}>
              <File5 setFile5={setFile5} />
            </Grid>
          )}
          {fileCount > 5 && (
            <Grid item xs={12}>
              <File6 setFile6={setFile6} />
            </Grid>
          )}
          {fileCount > 6 && (
            <Grid item xs={12}>
              <File7 setFile7={setFile7} />
            </Grid>
          )}
          {fileCount > 7 && (
            <Grid item xs={12}>
              <File8 setFile8={setFile8} />
            </Grid>
          )}
          {fileCount > 8 && (
            <Grid item xs={12}>
              <File9 setFile9={setFile9} />
            </Grid>
          )}
          {fileCount > 9 && (
            <Grid item xs={12}>
              <File10 setFile10={setFile10} />
            </Grid>
          )}
        </Grid>
        {fileCount < 10 && (
          <Button
            fullWidth
            variant='outlined'
            color='primary'
            className={classes.submit}
            onClick={() => setFileCount((prev) => prev + 1)}
          >
            Upload More +
          </Button>
        )}
        <Button
          disabled={
            firstName === '' && lastName === '' && amount === '' && nid === ''
          }
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          Submit
        </Button>
      </form>
      <ThankYouRequest open={open} setOpen={setOpen} />
      <Box mt={5} />
    </>
  )
}
