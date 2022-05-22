import { Box, Grid, Hidden, makeStyles, Typography } from '@material-ui/core'
import one from 'img/colaborate/1.png'
import two from 'img/colaborate/2.png'
import three from 'img/colaborate/3.png'
import four from 'img/colaborate/4.png'

const useStyles = makeStyles((theme) => ({
  gridOne: {
    position: 'relative',
    top: 150,
  },
  gridFour: {
    position: 'relative',
    top: -150,
  },

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
  boxTwo: {
    padding: '7rem 0',
    width: '100%',
    height: '100%',
    backgroundImage: ` 
                  url(${two})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  boxThree: {
    padding: '7rem 0',
    width: '100%',
    height: '100%',
    backgroundImage: ` 
                  url(${three})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  boxFour: {
    padding: '7rem 0',
    width: '100%',
    height: '100%',
    backgroundImage: ` 
                  url(${four})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },

  span: {
    color: 'grey',
    fontSize: 20,
  },
}))

const Pc = () => {
  const classes = useStyles()
  return (
    <Hidden smDown>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={3}
      >
        <Grid
          className={classes.gridOne}
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
          md={6}
          data-aos='fade-right'
        >
          <Box className={classes.boxTwo}>
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
          md={6}
          data-aos='fade-left'
        >
          <Box className={classes.boxThree}>
            <Typography color='primary' align='center' variant='h4'>
              367
              <br />
              <span className={classes.span}>VOLUNTEER</span>
            </Typography>
          </Box>
        </Grid>
        <Grid
          className={classes.gridFour}
          container
          justifyContent='center'
          alignItems='center'
          item
          xs={12}
          md={12}
          data-aos='fade-up'
        >
          <Box className={classes.boxFour}>
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

export default Pc
