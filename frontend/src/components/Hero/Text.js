import {
  Divider,
  Box,
  Typography,
  useTheme,
  Container,
  Hidden,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const Text = () => {
  const theme = useTheme()
  return (
    <Container>
      <Hidden smDown>
        <Box my={20} />
      </Hidden>
      <Typography color='primary' align='left' variant='h6'>
        Get Started with Fund Gateway
      </Typography>
      <Divider
        style={{
          width: '10%',
          height: 2,
          borderRadius: 10,
          background: theme.palette.primary.main,
        }}
      />
      <Box my={3}>
        <Typography align='left' variant='h3'>
          Help The people with Fund Gateway
        </Typography>
      </Box>
      <Typography
        align='left'
        component='div'
        color='textSecondary'
        variant='subtitle1'
      >
        The world calls for, and expects from us, simplicity of life, the spirit
        of prayer, charity towards all, especially towards the lowly and the
        poor. Connect With the Globally recognized funding program called Fund
        Gateway.
        <br />
        <Typography
          component={Link}
          to='/signin/donate'
          align='left'
          color='primary'
          variant='subtitle1'
        >
          Donate Now To Help People.
        </Typography>
      </Typography>
    </Container>
  )
}

export default Text
