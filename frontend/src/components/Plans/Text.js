import { Button, Divider, Box, Typography, useTheme } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const Text = () => {
  const theme = useTheme()
  return (
    <>
      <Typography color='primary' align='left' variant='h6'>
        GET STARTED TODAY.
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
          Our Fundraising Plans
        </Typography>
      </Box>
      <Typography color='secondary' align='left' variant='h5'>
        Collaborate with team members to rally support
      </Typography>
      <Box my={3} />
      <Typography align='left' color='textSecondary' variant='subtitle1'>
        The world calls for, and expects from us, simplicity of life, the spirit
        of prayer, charity towards all, especially towards the lowly and the
        poor.When someone does something that they know. Join with Fund Gateway program
        to help the needy peoples.
      </Typography>

      <Box my={3}>
        <Button
          size='large'
          color='primary'
          variant='outlined'
          endIcon={<ArrowRightAltIcon />}
        >
          Learn More
        </Button>
      </Box>
    </>
  )
}

export default Text
