import { Box, Grid, Hidden, makeStyles, Typography } from '@material-ui/core'
import one from 'img/colaborate/1.png'

const useStyles = makeStyles((theme) => ({
  boxOne: {
    padding: '7rem 0',
    width: '100%',
    height: '100%',
    backgroundImage: ` 
                  url(${one})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },

  span: {
    color: 'grey',
    fontSize: 20,
  },
}))

const Mobile = () => {
  const classes = useStyles()
  return (
    <Hidden smUp>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={0}
      >
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          item
          xs={12}
          md={12}
          data-aos='fade-down'
        >
          <Box className={classes.boxOne}>
            <Typography color='primary' align='center' variant='h4'>
              367
              <br />
              <span className={classes.span}>VOLUNTEER</span>
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          item
          xs={12}
          md={12}
          data-aos='fade-down'
        >
          <Box className={classes.boxOne}>
            <Typography color='primary' align='center' variant='h4'>
              367
              <br />
              <span className={classes.span}>VOLUNTEER</span>
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          item
          xs={12}
          md={12}
          data-aos='fade-down'
        >
          <Box className={classes.boxOne}>
            <Typography color='primary' align='center' variant='h4'>
              367
              <br />
              <span className={classes.span}>VOLUNTEER</span>
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          item
          xs={12}
          md={12}
          data-aos='fade-down'
        >
          <Box className={classes.boxOne}>
            <Typography color='primary' align='center' variant='h4'>
              367
              <br />
              <span className={classes.span}>VOLUNTEER</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Hidden>
  )
}

export default Mobile
