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
} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction='up' ref={ref} {...props} />
})

export default function Modal({ item }) {
  const [open, setOpen] = useState(false)

  const { title, created, description, img, uploader_name } = item

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        component='div'
        size='small'
        color='primary'
      >
        Read More
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle id='alert-dialog-slide-title'>{title}</DialogTitle>
        <DialogContent dividers>
          <img src={img} alt='img' width='100%' />
          <Box display='flex' justifyContent='space-between'>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
          </Box>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
          <br />
          <Typography variant='body1' color='textPrimary' component='p'>
            Created at: {new Date(created).toDateString()}
          </Typography>
          <Box my={3} />
          <Typography align='right'>Author: {uploader_name}</Typography>
        </DialogContent>
      </Dialog>
    </div>
  )
}
