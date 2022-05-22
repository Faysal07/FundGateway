import React from 'react'
import {
  Grow,
  Button,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction='up' ref={ref} {...props} />
})

export default function ThankYouRequest({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle id='alert-dialog-slide-title'>Successfull</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom variant='h5' component='h2'>
            Thank you for placing your request.
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
