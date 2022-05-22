import { Box, Container, Grid, useMediaQuery } from '@material-ui/core'
import About from './About'

import { makeStyles } from '@material-ui/core'
import Fund from './Fund'
import Learn from './Learn'
import Resources from './Resources'
import End from './End'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#000C35',
    color: '#fff',
    paddingTop: theme.spacing(8),
  },
}))

const Footer = () => {
  const classes = useStyles()
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <Box className={classes.root}>
      <Container>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='flex-start'
          spacing={3}
        >
          <Grid
            item
            container
            direction='column'
            justifyContent={isSmall ? 'center' : 'flex-start'}
            xs={12}
            sm={2}
          >
            <About />
          </Grid>
          <Grid
            item
            container
            direction='column'
            justifyContent={isSmall ? 'center' : 'flex-start'}
            xs={12}
            sm={2}
          >
            <Fund />
          </Grid>
          <Grid
            item
            container
            direction='column'
            justifyContent={isSmall ? 'center' : 'flex-start'}
            xs={12}
            sm={2}
          >
            <Learn />
          </Grid>
          <Grid
            item
            container
            direction='column'
            justifyContent={!isSmall ? 'center' : 'flex-start'}
            xs={12}
            sm={2}
          >
            <Resources />
          </Grid>
        </Grid>
        <End />
      </Container>
    </Box>
  )
}

export default Footer
