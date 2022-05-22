import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { Grid, TextField, Paper } from '@material-ui/core'

import ibbl from 'img/NetBanking/ibbl.png'
import mtbl from 'img/NetBanking/mtbl.png'
import citytouch from 'img/NetBanking/citytouch.png'
import bankasia from 'img/NetBanking/bankasia.png'

export default function NetBanking({ setTrasactionID }) {
  const [type, setType] = useState('ibbl')

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={6} sm={4}>
          <Paper align='center' elevation={3}>
            <img src={ibbl} height={80} alt='pay' />
            <Button
              fullWidth
              variant={type === 'ibbl' ? 'contained' : 'outlined'}
              color='primary'
              onClick={() => setType('ibbl')}
            >
              ibbl
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper align='center' elevation={3}>
            <img src={mtbl} height={80} alt='pay' />
            <Button
              fullWidth
              variant={type === 'mtbl' ? 'contained' : 'outlined'}
              color='primary'
              onClick={() => setType('mtbl')}
            >
              mtbl
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper align='center' elevation={3}>
            <img src={citytouch} height={80} alt='pay' />
            <Button
              fullWidth
              variant={type === 'citytouch' ? 'contained' : 'outlined'}
              color='primary'
              onClick={() => setType('citytouch')}
            >
              citytouch
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper align='center' elevation={3}>
            <img src={bankasia} height={80} alt='pay' />
            <Button
              fullWidth
              variant={type === 'bankasia' ? 'contained' : 'outlined'}
              color='primary'
              onClick={() => setType('bankasia')}
            >
              bankasia
            </Button>
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
