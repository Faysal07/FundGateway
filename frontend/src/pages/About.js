import { Container } from '@material-ui/core'
import AboutPage from 'components/AboutPage'
import ImageSection from 'components/AboutPage/ImageSection'

const About = () => {
  return (
    <>
      <ImageSection />
      <Container>
        <AboutPage />
      </Container>
    </>
  )
}

export default About
