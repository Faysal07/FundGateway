import { Divider, Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0),
    '&:hover $rootDiv': {
      width: '100%',
    },
  },
  rootDiv: {
    width: '20%',
    height: 2,
    borderRadius: 10,
    background: theme.palette.primary.main,
    transition: 'all 0.4s ease-in-out',
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.root}>
        <Typography align='left' variant='h5'>
          ABOUT US
        </Typography>
        <Divider className={classes.rootDiv} />
      </Box>

      <Typography align='left' color='inherit' variant='subtitle2'>
        Fund Gateway is an international organization in Bangladesh. It is very popular
        among people as it provides lots of fund to poor and needy people. Moreover,
        we provide funds to different charities. That is the reason We are known as the number 1 charity
        foundation in Bangladesh.
      </Typography>
    </>
  )
}

export default About
