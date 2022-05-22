import React, { useState } from 'react'
import {
  Grow,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  Box,
  Typography,
  DialogContent,
  DialogActions,
} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction='up' ref={ref} {...props} />
})

export default function ThankYouModal({ open2, setOpen2 }) {
  const handleClose = () => {
    setOpen2(false)
  }

  return (
    <div>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle id='alert-dialog-slide-title'>Successfull</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom variant='h5' component='h2'>
            Thank you for your donation.
            <br />
            Please check your donation confirmation main.
          </Typography>
        </DialogContent>
        <DialogActions
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            fullWidth
            onClick={handleClose}
            size='small'
            variant='contained'
            color='secondary'
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
