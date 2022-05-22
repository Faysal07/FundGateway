import { Grid } from '@material-ui/core'
import Image from './Image'
import Text from './Text'

const Colaborate = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={3}
    >
      <Grid item xs={12} sm={6}>
        <Image />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Text />
      </Grid>
    </Grid>
  )
}

export default Colaborate
