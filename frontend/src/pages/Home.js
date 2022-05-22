import { Container } from '@material-ui/core'
import About from 'components/About'
import ActiveCampaing from 'components/ActiveCampaing'
import Colaborate from 'components/Colaborate'
import Hero from 'components/Hero'
import Plans from 'components/Plans'
import Cards from 'components/Hero/Cards'

const Home = () => {
  // ((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})
  return (
    <>
      <Hero />
      <Container>
        <Cards />
        <About />
        <ActiveCampaing />
        <Plans />
        <Colaborate />
      </Container>
    </>
  )
}

export default Home
