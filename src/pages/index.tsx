import React, { useContext, useRef } from 'react'
import { SEO } from '../SEO'
import { CardsWrapper, Graphic, DescriptionDay } from '../components'
import { Container } from '../components/Container'
import { WeatherContext } from '../contexts/weather'

const Home = () => {
  const { days, cardActive } = useContext(WeatherContext)

  return (
    <>
      <SEO
        title="Wheater App"
        description="The website consumes a Weather Weather API that informs the weather conditions in a certain region."
      />
      <Container>
        <DescriptionDay
          temperatureCelcius={days[cardActive]?.temp}
          wind={days[cardActive]?.wind}
          humidity={days[cardActive]?.humidity}
          conditions={days[cardActive]?.condition}
        />

        <div>
          <Graphic />
          <CardsWrapper cards={days} />
        </div>
      </Container>
    </>
  )
}

export default Home
