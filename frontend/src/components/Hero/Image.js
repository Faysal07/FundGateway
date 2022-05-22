import hero from 'img/hero/heroImg.png'
import Animate from 'utils/Animate'

const Image = () => {
  return (
    <Animate anim='fade-up'>
      <img src={hero} alt='kids' width='100%' />
    </Animate>
  )
}

export default Image
