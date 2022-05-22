import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { Grid, TextField, Paper, Typography } from '@material-ui/core'
import visa from 'img/cardPayment/visa.png'
import mastercard from 'img/cardPayment/mastercard.png'
import amex from 'img/cardPayment/amex.png'

export default function Cards() {
  return (
    <div>
      <Grid container spacing={0} alignItems='center'>
        <Grid item xs={2}>
          <img src={visa} height={30} alt='visa' />
        </Grid>
        <Grid item xs={2}>
          <img src={mastercard} height={30} alt='visa' />
        </Grid>
        <Grid item xs={2}>
          <img src={amex} height={20} alt='visa' />
        </Grid>
      </Grid>
      <br />
      <TextField
        variant='outlined'
        required
        fullWidth
        label='Enter Card Number'
        name='cnum'
      />
      <br />
      <br />
      <TextField
        variant='outlined'
        required
        fullWidth
        label='Enter Holders Name'
        name='cnum'
      />
    </div>
  )
}
