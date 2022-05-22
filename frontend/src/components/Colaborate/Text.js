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
          Collaborate With Team Members To Rise.
        </Typography>
      </Box>

      <Box my={3} />
      <Typography align='left' color='textSecondary' variant='subtitle1'>
        The world calls for, and expects from us, simplicity of life, the spirit
        of prayer, charity towards all, especially towards the lowly and the
        poor.When someone does something that they know that they shouldn’t do
        this again in you house.
        <br />
        They really have a choice. Maybe what I mean to say is did they really
        have a chance. Harness the power of social media to spread.
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
