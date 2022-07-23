import React, { useState } from 'react'
import { WheaterPreview } from '../WheaterPreview'
import { Container } from './styles'

export const WrapperPreview = () => {
  const [isActive, setIsActive] = useState(0)

  const cards = [
    {
      id: 1,
      dia: 'Hoje'
    },
    {
      id: 2,
      dia: '22 de julho de 2022'
    },
    {
      id: 3,
      dia: '23 de julho de 2022'
    },
    {
      id: 4,
      dia: '24 de julho de 2022'
    }
  ]

  const changeColor = (id: number) => {
    setIsActive(id)
  }

  return (
    <>
      <Container>
        {cards.map(card => {
          return (
            <WheaterPreview
              day={card.dia}
              key={card.id}
              className={isActive === card.id ? 'default active' : 'default'}
              onClick={() => changeColor(card.id)}
            />
          )
        })}
      </Container>
    </>
  )
}
