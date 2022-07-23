import React, { useEffect, useState } from 'react'
import { SEO } from '../SEO'
import { CardsWrapper, Graphic, DescriptionDay } from '../components'
import { Container } from '../components/Container'
import weatherApi from '../API/index'
import { WheaterAPIResponse } from '../types/WheaterApiResponse'

const Home = () => {
  const [wheater, setWheater] = useState<WheaterAPIResponse>({})
  async function loadwheater() {
    await weatherApi
      .get('current.json?', {
        params: {
          key: '37083693771e4a40adf145739222207',
          q: 'Florianopolis',
          aqi: 'yes'
        }
      })
      .then(res => {
        setWheater(res.data)
      })
  }
  useEffect(() => {
    loadwheater()
  }, [])
  return (
    <>
      <SEO
        title="Wheater App"
        description="The website consumes a Weather Weather API that informs the weather conditions in a certain region."
      />
      <Container>
        <DescriptionDay celcius={wheater.current?.temp_c} />
        <div>
          <Graphic />
          <CardsWrapper />
        </div>
      </Container>
    </>
  )
}

export default Home
