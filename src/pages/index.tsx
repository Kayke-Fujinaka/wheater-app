import React from 'react'
import { SEO } from '../SEO'
import { CardsWrapper } from '../components/CardsWrapper'
import { Graphic } from '../components/Graphic'
const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Wheater App"
        description="The website consumes a Weather Weather API that informs the weather conditions in a certain region."
      />
      <Graphic />
      <CardsWrapper />
    </>
  )
}

export default Home
