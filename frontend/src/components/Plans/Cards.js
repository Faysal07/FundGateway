import {
  Box,
  Hidden,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import one from 'img/plans/1.png'
import two from 'img/plans/2.png'
import three from 'img/plans/3.png'
import four from 'img/plans/4.png'
import Animate from 'utils/Animate'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: theme.spacing(3, 1),
    margin: theme.spacing(4, 0),
  },
  paperLeft: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: theme.spacing(3, 1),
    position: 'relative',
    left: '50px',
  },
}))

const Cards = () => {
  const classes = useStyles()
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <Box my={3}>
      <Animate anim='zoom-in-left'>
        <Paper className={classes.paper}>
          <img src={one} alt='plans' />
          <Typography variant={isSmall ? 'subtitle1' : 'h6'}>
            Education for Children
          </Typography>
        </Paper>
      </Animate>
      <Hidden smUp>
        <Animate anim='zoom-in-left'>
          <Paper className={classes.paper}>
            <img src={two} alt='plans' />
            <Typography variant={isSmall ? 'subtitle1' : 'h6'}>
              Shelter for homeless people
            </Typography>
          </Paper>
        </Animate>
      </Hidden>
      <Hidden smDown>
        <Animate anim='zoom-in-left'>
          <Paper className={classes.paperLeft}>
            <img src={two} alt='plans' />
            <Typography variant={isSmall ? 'subtitle1' : 'h6'}>
              Home for Orphans
            </Typography>
          </Paper>
        </Animate>
      </Hidden>
      <Animate anim='zoom-in-left'>
        <Paper className={classes.paper}>
          <img src={three} alt='plans' />
          <Typography variant={isSmall ? 'subtitle1' : 'h6'}>
            Food for hungry peoples
          </Typography>
        </Paper>
      </Animate>
      <Hidden smUp>
        <Animate anim='zoom-in-left'>
          <Paper className={classes.paper}>
            <img src={four} alt='plans' />
            <Typography variant={isSmall ? 'subtitle1' : 'h6'}>
              Medicine for poor people
            </Typography>
          </Paper>
        </Animate>
      </Hidden>
      <Hidden smDown>
        <Animate anim='zoom-in-left'>
          <Paper className={classes.paperLeft}>
            <img src={four} alt='plans' />
            <Typography variant={isSmall ? 'subtitle1' : 'h6'}>
              Medicine for Orphans
            </Typography>
          </Paper>
        </Animate>
      </Hidden>
    </Box>
  )
}

export default Cards
