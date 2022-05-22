import { Box, Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'

const End = () => {
  return (
    <Box mt={3}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={3}
      >
        
        <Grid item container justifyContent='center' xs={12} sm={4}>
          <Typography variant='h6'>Copyright Fund Gateway - 2021</Typography>
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default End
