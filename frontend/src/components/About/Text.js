import { Button, Divider, Box, Typography, useTheme } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const Text = ({ about }) => {
  const theme = useTheme()

  console.log(about, 'about')

  return (
    <>
      <Typography color='primary' align='left' variant='h6'>
        Our Mission
      </Typography>
      <Divider
        style={{
          width: '8%',
          height: 2,
          borderRadius: 10,
          background: theme.palette.primary.main,
        }}
      />
      <Box my={3}>
        <Typography align='left' variant='h3'>
          {about?.title}
          {/* A Dream In Their Mind Is Our Mission */}
        </Typography>
      </Box>
      <Typography color='secondary' align='left' variant='h5'>
        {about?.short_title}
        {/* Collaborate with team members to rally support */}
      </Typography>
      <Box my={3} />
      <Typography align='left' color='textSecondary' variant='subtitle1'>
        {about?.Description}
        {/* he new allocation will help expand response to cover those households
        that are led by women and have elderly, pregnant, or disabled family
        members, or who have lost all assets. */}
      </Typography>
      {/* <Typography align='left' color='textSecondary' variant='subtitle1'>
        Priority is being given to the upazilas that have experienced extremely
        severe flooding, feature a high proportion of affected .
      </Typography> */}
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
