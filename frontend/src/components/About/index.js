import { Box, Grid, Hidden } from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from './Image'
import Text from './Text'

const About = () => {
  const [about, setAbout] = useState({})

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/about/')
      .then((res) => {
        setAbout(res.data[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
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
        <Text about={about} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Hidden smDown>
          <Image img={about?.img} />
        </Hidden>
      </Grid>
    </Grid>
  )
}

export default About
