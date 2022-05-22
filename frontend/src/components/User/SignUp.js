import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import { Link, useHistory, useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Password from './Password'
import { emailCheck } from './regEx'
import axios from 'axios'
import CryptoJS from 'crypto-js'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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

export default function SignUp() {
  const classes = useStyles()
  const history = useHistory()
  const { id } = useParams()
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [validPass, setValidPass] = useState(false)
  const validEmail = emailCheck(email)

  const validity =
    validPass && validEmail && firstName !== '' && lastName !== ''

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validity) {
      console.log({ firstName, lastName, email, password })
      const user = {
        f_name: firstName,
        l_name: lastName,
        email: email,
        password: CryptoJS.AES.encrypt(password, 'Saif Newaz').toString(),
      }

      axios
        .post('http://127.0.0.1:8000/api/createuser/', user)
        .then((res) => {
          console.log(res)
          history.push(`/signin`)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <Container maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
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
                name='password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                label='Password'
                autoComplete='current-password'
              />
            </Grid>
            <Grid item xs={12}>
              <Password password={password} setValidPass={setValidPass} />
            </Grid>
          </Grid>
          <Button
            disabled={!validity}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link
                className={classes.link}
                to={`/signin/${id}`}
                variant='body2'
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5} />
    </Container>
  )
}
