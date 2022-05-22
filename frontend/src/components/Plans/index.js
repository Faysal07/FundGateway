import { Box, Grid, Hidden } from '@material-ui/core'
import Image from './Cards'
import Text from './Text'

const Plans = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={3}
    >
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

export default Plans
