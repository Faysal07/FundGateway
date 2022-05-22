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

  const { name, created, description, img, project_name, author_name } = item

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
        <DialogTitle id='alert-dialog-slide-title'>{name}</DialogTitle>
        <DialogContent dividers>
          <img src={img} alt='img' width='100%' />
          <Box display='flex' justifyContent='space-between'>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography align='left'>Project: {project_name}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography align='right'>Author: {author_name}</Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}
