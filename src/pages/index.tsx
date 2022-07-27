import React from 'react'
import { SEO } from '../SEO'
import { WrapperPreview, Graphic, WheaterStats } from '../components'
import { Container } from '../components/Container'
import { useWheater } from '../contexts/weather'

const Home = () => {
  const { days, cardActive } = useWheater()

  return (
    <>
      <SEO
        title="Wheater App"
        description="The website consumes a Weather Weather API that informs the weather conditions in a certain region."
      />
      <Container>
        <WheaterStats
          temperatureCelcius={days[cardActive]?.temp}
          wind={days[cardActive]?.wind}
          humidity={days[cardActive]?.humidity}
          conditions={days[cardActive]?.condition}
        />

        <div>
          <Graphic />
          <WrapperPreview cards={days} />
        </div>
      </Container>
    </>
  )
}

export default Home
