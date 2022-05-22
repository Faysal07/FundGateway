import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from '@material-ui/core'

import SingleCard from './SingleCard'
import Animate from '../../utils/Animate'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Cards = ({ year, project }) => {
  const theme = useTheme()
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/blog/')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (!data) return 'Loading...'
  let filterData = data

  console.log(data)

  filterData = filterData.filter(
    (item) => new Date(item.created).getFullYear() === year
  )
  if (project !== '') {
    filterData = filterData.filter((item) => item.project_name === project)
  }

  return (
    <Container maxWidth='xl'>
      <Box mt={3}>
        <Typography align='left' variant='h2'>
          Blogs
        </Typography>
        <Divider
          style={{
            height: 3,
            borderRadius: 10,
            background: theme.palette.primary.main,
          }}
        />
      </Box>
      <Box py={5}>
        <Grid container spacing={5}>
          {filterData.map((item) => (
            <Grid key={item.id} item xs={12} md={6}>
              <Animate anim='zoom-in-up'>
                <SingleCard item={item} />
              </Animate>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Cards
