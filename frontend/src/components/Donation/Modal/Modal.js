import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Grow } from '@material-ui/core'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import emailjs from 'emailjs-com'
import axios from 'axios'
import ThankYouModal from './ThankYouModal'
import ModalTabs from './Tabs'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction='up' ref={ref} {...props} />
})

export default function Modal({ data, open, setOpen, title, setTrasactionID }) {
  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  const {
    project,
    donatePost,
    charityName,
    amount,
    firstName,
    lastName,

    email,
  } = data
  const [newAmount, setNewAmount] = useState(0)
  const [donators, setDonators] = useState(0)

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/project/${project}/`)
      .then((res) => {
        setNewAmount(Number(res.data.raised) + Number(amount))
        setDonators(Number(res.data.donators) + 1)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  const handleClose = () => {
    setOpen(false)
  }

  const mail = {
    to_name: charityName === '' ? firstName + ' ' + lastName : charityName,
    from_name: 'Fund Gateway',

    user_email: email,
    message: `Thank for donating ${amount}taka`,
  }

  const [open2, setOpen2] = useState(false)

  const sendEmail = () => {
    axios
      .patch(`http://127.0.0.1:8000/api/project/update/${project}/`, {
        raised: newAmount,
        donators,
      })
      .then(() => {
        setOpen2(true)

        // Email

        emailjs.send('fund1', 'test1', mail, 'user_PvzVe0DREvpS30EP3NwAY').then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
        // Posting data
        axios
          .post('http://127.0.0.1:8000/api/project_donate/', donatePost)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((error) => console.log(error))
    handleClose()

    setOpen2(true)
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>Payment Gateway</DialogTitle>

        <DialogContent dividers>
          <ModalTabs
            setTrasactionID={setTrasactionID}
            data={data}
            setOpen={setOpen}
          />
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            onClick={sendEmail}
            endIcon={<DoubleArrowIcon />}
            size='small'
            variant='contained'
            color='primary'
          >
            Proceed
          </Button>
          <ThankYouModal open2={open2} setOpen2={setOpen2} />
        </DialogActions>
      </Dialog>
    </div>
  )
}
