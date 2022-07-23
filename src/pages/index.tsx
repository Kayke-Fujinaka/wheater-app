import { SEO } from '../SEO'
import { WrapperPreview, Graphic, WheaterStats } from '../components'
import { Container } from '../components/Container'
const Home = () => {
  return (
    <>
      <SEO
        title="Wheater App"
        description="The website consumes a Weather Weather API that informs the weather conditions in a certain region."
      />

      <Container>
        <WheaterStats />
        <div>
          <Graphic />
          <WrapperPreview />
        </div>
      </Container>
    </>
  )
}

export default Home
