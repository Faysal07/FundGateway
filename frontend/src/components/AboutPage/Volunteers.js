import { Box, Divider, Typography, useMediaQuery } from '@material-ui/core'
import VolunteerCards from './VolunteerCards'

const Volunteers = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <Box my={10}>
      <Typography variant='h3' align='center' style={{ fontWeight: 'bold' }}>
        Our Volunteers
      </Typography>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Divider
          style={{
            margin: '15px 0',
            height: 5,
            width: isSmall ? '30%' : '15%',
            borderRadius: 100,
            background: '#4caf50',
          }}
        />
      </Box>
      <Typography style={{ marginTop: 20 }} variant='body1' align='center'>
        We make a difference in the lives of people during a very traumatic time
        in their life. Meeting their medical transport needs eases their burden.
      </Typography>
      <VolunteerCards />
    </Box>
  )
}

export default Volunteers
