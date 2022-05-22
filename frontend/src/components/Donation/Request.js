import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Charity from './Charity'
import Personal from './Personal'

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

export default function Request() {
  const classes = useStyles()
  const [type, setType] = useState('Personal')

  return (
    <Container maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FavoriteBorderIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Request for a donation
        </Typography>
        <Box my={2} />
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
        </Grid>
        {type === 'Personal' ? (
          <Personal type={type} />
        ) : (
          <Charity type={type} />
        )}
      </div>
    </Container>
  )
}
