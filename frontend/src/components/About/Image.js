import { Box } from '@material-ui/core'
import one from 'img/about/1.jpeg'
import two from 'img/about/2.jpeg'
import Animate from 'utils/Animate'

const Image = ({ img }) => {
  return (
    <Box my={3} style={{ postion: 'absolute' }}>
      <Animate anim='fade-up'>
        <img
          style={{
            position: 'relative',
            top: 250,
            width: '100%',
            outline: '15px solid #fff',
          }}
          src={one}
          alt='kids'
        />
      </Animate>
      <Animate anim='fade-up'>
        <img
          style={{
            position: 'relative',
            top: -100,
            left: 100,
            width: '100%',
            outline: '15px solid #fff',
          }}
          src={img || two}
          alt='kids'
          width='100%'
        />
      </Animate>
    </Box>
  )
}

export default Image
