import { SEO } from '../SEO'
import { CardsWrapper, Graphic, DescriptionDay } from '../components'
import { Container } from '../components/Container'
const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Wheater App"
        description="The website consumes a Weather Weather API that informs the weather conditions in a certain region."
      />

      <Container>
        <DescriptionDay />
        <div>
        <Graphic />
        <CardsWrapper />
        </div>
      </Container>
    </>
  )
}

export default Home
