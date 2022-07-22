import React, { useEffect, useState } from 'react'
import { SEO } from '../SEO'
import { CardsWrapper, Graphic, DescriptionDay } from '../components'
import { Container } from '../components/Container'
import weatherApi from '../API/index'

const Home = () => {
  const [wheater, setwheater] = useState([])
  // eslint-disable-next-line prefer-const
  let arr = []
  useEffect(() => {
    async function loadwheater() {
      const response = await weatherApi.get('current.json?', {
        params: {
          key: '37083693771e4a40adf145739222207',
          q: 'Salvador',
          aqi: 'yes'
        }
      })
      setwheater(response.data)
    }
    loadwheater()
  }, [])

  arr.push(wheater)
  JSON.stringify(arr)
  console.log(wheater)

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
          {wheater.map(idx => {
            return (
              <article key={idx.location}>
                <strong>{idx.name}</strong>
                <img src={`${idx.current}`} alt={idx.current} />
              </article>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default Home
