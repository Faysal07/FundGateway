import { Box, Container, Grid } from '@material-ui/core'

import SingleCard from './SingleCard'
import data from './data'

const Cards = ({ year, project }) => {
  return (
    <Container maxWidth='xl'>
      <Box py={10}>
        <Grid container spacing={5}>
          {data.map((item) => (
            <Grid key={item.id} item xs={12} md={4}>
              <SingleCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Cards
