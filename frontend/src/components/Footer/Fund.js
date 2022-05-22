import {
  Divider,
  Box,
  Typography,
  makeStyles,
  Button,
  ButtonGroup,
} from '@material-ui/core'

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

const Fund = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.root}>
        <Typography align='left' variant='h5'>
          Fundraise For
        </Typography>
        <Divider className={classes.rootDiv} />
      </Box>

      <ButtonGroup
        orientation='vertical'
        color='primary'
        aria-label='vertical contained primary button group'
        variant='text'
      >
        <Button>Medical</Button>
        <Button>Emergency</Button>
        <Button>Education</Button>
        <Button>Charity</Button>
      </ButtonGroup>
    </>
  )
}

export default Fund
