import { Box, Grid, Typography } from '@material-ui/core'
import data from './memberData'

const VolunteerCards = () => {
  return (
    <Box my={10}>
      <Grid container spacing={3} alignItems='stretch'>
        {data.map((item) => (
          <Grid item xs={12} sm={4}>
            <img src={item.img} alt='img' width='100%' />

            <Typography align='center' variant='h4'>
              {item.name}
            </Typography>
            <Typography align='center' variant='h5'>
              {item.post}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default VolunteerCards
