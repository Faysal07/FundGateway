import { Grid, Box, Hidden } from '@material-ui/core'
import Image from './Image'
import Text from './Text'

const Hero = () => {
  return (
    <Grid container direction='row' justifyContent='center'>
      <Grid item xs={12} sm={6}>
        <Hidden mdUp>
          <Box py={2} />
        </Hidden>
        <Text />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Image />
      </Grid>
    </Grid>
  )
}

export default Hero
