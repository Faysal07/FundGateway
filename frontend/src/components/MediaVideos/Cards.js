import {
  Box,
  Container,
  Divider,
  Typography,
  useTheme,
} from '@material-ui/core'

const Cards = () => {
  const theme = useTheme()

  return (
    <Container maxWidth='xl'>
      <Box mt={3}>
        <Typography align='left' variant='h2'>
          Video
        </Typography>
        <Divider
          style={{
            height: 3,
            borderRadius: 10,
            background: theme.palette.primary.main,
          }}
        />
      </Box>
      <Box
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          height: '80vh',
        }}
        py={5}
      >
        <iframe
          width='100%'
          height='100%'
          src={`https://www.youtube.com/embed/rbRkJQEeVBc`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </Box>
    </Container>
  )
}

export default Cards
