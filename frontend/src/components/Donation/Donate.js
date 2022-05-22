import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Category from './Category'
import Project from './Project'
import Modal from './Modal/Modal'
import SubCategory from './SubCategory'

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

export default function Donate() {
  const classes = useStyles()
  const [type, setType] = useState('Personal')
  const [data, setData] = useState({})
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [charityName, setCharityName] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const [trasactionID, setTrasactionID] = useState('')
  const [project, setProject] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')

  let nameValid
  if (firstName !== '' && lastName !== '' && charityName === '') {
    nameValid = false
  } else if (firstName === '' && lastName === '' && charityName !== '') {
    nameValid = false
  } else if (firstName !== '' && lastName !== '' && charityName !== '') {
    nameValid = false
  } else {
    nameValid = true
  }

  const donatePost = {
    type,
    first_name: firstName || charityName,
    last_name: lastName || charityName,
    email: email,
    donation_amount: amount,
    transaction_id: trasactionID.toString(),
    category_id: category,
    subcategory_id: subCategory,
    project_id: project,
  }

  console.log({ trasactionID })

  // Modal
  const [open, setOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setData({
      project,
      donatePost,
      amount,
      firstName,
      lastName,
      charityName,
      email,
    })

    console.log({ data })
    setOpen(true)
  }

  return (
    <Container maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FavoriteBorderIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Donate
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant={type === 'Personal' ? 'contained' : 'outlined'}
                color='primary'
                onClick={() => setType('Personal')}
              >
                Personal Request
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant={type === 'Charity' ? 'contained' : 'outlined'}
                fullWidth
                color='primary'
                onClick={() => setType('Charity')}
              >
                Charity Request
              </Button>
            </Grid>

            {type === 'Charity' ? (
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='cName'
                  label='Charity Name'
                  name='cName'
                  autoComplete='cname'
                  onChange={(e) => setCharityName(e.target.value)}
                />
              </Grid>
            ) : (
              <>
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
              </>
            )}

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
              <Category category={category} setCategory={setCategory} />
            </Grid>
            {category !== '' && (
              <Grid item xs={12}>
                <SubCategory
                  category={category}
                  subCategory={subCategory}
                  setSubCategory={setSubCategory}
                />
              </Grid>
            )}
            {subCategory !== '' && (
              <Grid item xs={12}>
                <Project
                  subCategory={subCategory}
                  project={project}
                  setProject={setProject}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                type='number'
                label='Donation amount'
                name='amount'
                onChange={(e) => setAmount(e.target.value)}
              />
            </Grid>
          </Grid>
          <Modal
            setTrasactionID={setTrasactionID}
            data={data}
            title='submit'
            open={open}
            setOpen={setOpen}
          />
          <Button
            disabled={
              nameValid ||
              email === '' ||
              amount === '' ||
              project === '' ||
              category === '' ||
              subCategory === ''
            }
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Transaction
          </Button>
        </form>
      </div>
      <Box mt={5} />
    </Container>
  )
}
