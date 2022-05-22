import { Box, Container, Grid, Typography } from '@material-ui/core'

import SingleCard from './SingleCard'
import data from './data'
import Animate from 'utils/Animate'

const Cards = () => {
  return (
    <Container maxWidth='xl'>
      <Box my={5}>
        <Typography color='primary' align='center' variant='h6'>
          GOOD CAUSES
        </Typography>
        <Typography align='center' variant='h3'>
          Help The Poor Throughout Us
        </Typography>
      </Box>
      <Box py={5}>
        <Grid container spacing={5}>
          {data.map((item) => (
            <Grid key={item.title} item xs={12} sm={6} md={4}>
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
