import { Typography } from '@material-ui/core'
import aboutImg from 'img/aboutPage/aboutImg.jpg'

const ImageSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${aboutImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        width: '100%',
        padding: '8rem 3rem',
      }}
    >
      <Typography display='inline' color='primary' variant='h3'>
        |{' '}
      </Typography>
      <Typography
        display='inline'
        style={{
          color: 'white',
        }}
        variant='h3'
      >
        About Us
      </Typography>
    </div>
  )
}

export default ImageSection
