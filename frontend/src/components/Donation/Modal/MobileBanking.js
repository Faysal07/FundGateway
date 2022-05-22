import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { Grid, TextField, Paper, Typography } from '@material-ui/core'

import bkash from 'img/Payment/bkash.svg'
import nagad from 'img/Payment/nagad.png'
import rocket from 'img/Payment/rocket.png'
import upay from 'img/Payment/upay.png'

export default function MobileBanking({ setTrasactionID }) {
  const [type, setType] = useState('Bkash')

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={6} sm={4}>
          <Paper align='center' elevation={3}>
            <img src={bkash} height={80} alt='pay' />
            <Button
              fullWidth
              variant={type === 'Bkash' ? 'contained' : 'outlined'}
              color='primary'
              onClick={() => setType('Bkash')}
            >
              Bkask
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper align='center' elevation={3}>
            <img src={nagad} height={80} alt='pay' />
            <Button
              variant={type === 'Nagad' ? 'contained' : 'outlined'}
              fullWidth
              color='primary'
              onClick={() => setType('Nagad')}
            >
              Nagad
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper align='center' elevation={3}>
            <img src={upay} height={80} alt='pay' />
            <Button
              variant={type === 'UPAY' ? 'contained' : 'outlined'}
              fullWidth
              color='primary'
              onClick={() => setType('UPAY')}
            >
              UPAY
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={6} sm={4}>
          <Paper align='center' elevation={3}>
            <img src={rocket} height={80} alt='pay' />
            <Button
              variant={type === 'Rocket' ? 'contained' : 'outlined'}
              fullWidth
              color='primary'
              onClick={() => setType('Rocket')}
            >
              Rocket
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper style={{ padding: 10 }}>
            <Typography align='center' variant='h5'>
              Bkask/Nagad/Upay Number:
            </Typography>

            <Typography align='center' variant='h6' color='primary'>
              01714913850
            </Typography>

            <br />
            <Typography align='center' variant='h5'>
              Rocket Number:
            </Typography>
            <Typography align='center' variant='h6' color='primary'>
              017149138504
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setTrasactionID(e.target.value)}
            variant='outlined'
            required
            fullWidth
            label='Transaction ID'
            name='description'
          />
        </Grid>
      </Grid>
    </div>
  )
}
