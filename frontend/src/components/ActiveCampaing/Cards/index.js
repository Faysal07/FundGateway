import { Box, Typography } from '@material-ui/core'

import CardTabs from '../Tabs'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Cards = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/project/')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Box my={5}>
        <Typography color='primary' align='center' variant='h6'>
          ACTIVE CAMPAING
        </Typography>
        <Typography align='center' variant='h3'>
          Some Good Causes
        </Typography>
      </Box>
      <CardTabs data={data} />
      <Box py={5}></Box>
    </>
  )
}

export default Cards
