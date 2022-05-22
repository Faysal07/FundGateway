import {
  Button,
  Container,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
} from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'

const FilteredMails = ({ category }) => {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/email/')
      .then((res) => {
        setEmails(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [category])

  const filteredEm = emails.filter(
    (email) => email.subcategory_name === category
  )

  if (!emails) return 'Loading....'

  console.log({ filteredEm })
  if (!emails) return 'Loading...'

  const handleMail = () => {
    filteredEm.map((e) =>
      emailjs
        .send(
          'fund1',
          'test1',
          {
            to_name: 'Dear Customer',
            from_name: 'Fund Gateway',

            user_email: e.email,
            message: `A new project has been added to ${category}`,
          },
          'user_PvzVe0DREvpS30EP3NwAY'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    )
  }

  return (
    <Paper style={{ padding: 10 }}>
      {filteredEm.map((item) => (
        <li>{item.email}</li>
      ))}
      <br />
      <Button
        onClick={handleMail}
        fullWidth
        color='primary'
        variant='contained'
      >
        Email All
      </Button>
    </Paper>
  )
}

export default FilteredMails
