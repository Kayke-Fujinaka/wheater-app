import React, { useEffect, useState, useRef } from 'react'
import { SEO } from '../SEO'
import { CardsWrapper, Graphic, DescriptionDay } from '../components'
import { Container } from '../components/Container'
import weatherApi from '../API/index'
import { WheaterAPIResponse } from '../types/WheaterApiResponse'

const Home = () => {
  const locationValues: any = useRef()
  const [wheater, setWheater] = useState<WheaterAPIResponse>({})
  async function loadwheater(e?: React.FormEvent<HTMLFormElement>) {
    const location = locationValues.current.value
    if (e) {
      e.preventDefault()
    }
    await weatherApi
      .get('current.json?', {
        params: {
          key: '37083693771e4a40adf145739222207',
          q: location || 'São Paulo',
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
  console.log(wheater)
  return (
    <>
      <SEO
        title="Wheater App"
        description="The website consumes a Weather Weather API that informs the weather conditions in a certain region."
      />
      <Container>
        <form onSubmit={e => loadwheater(e)}>
          <DescriptionDay
            temperatureCelcius={wheater.current?.temp_c}
            wind={wheater.current?.wind_kph}
            humidity={wheater.current?.humidity}
            location={locationValues}
            conditions={wheater.current?.condition.text}
          />
        </form>
        <div>
          <Graphic />
          <CardsWrapper />
        </div>
      </Container>
    </>
  )
}

export default Home
