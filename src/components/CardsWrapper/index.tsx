import { Key, useState, ReactNode, useContext } from 'react'
import { WeatherContext } from '../../contexts/weather'
import { DayCard } from '../DayCard'

import { Container } from './styles'
interface cardsWrapperProps {
  cards: any
}

export const CardsWrapper = ({ cards }: cardsWrapperProps) => {
  const { changeIndex, cardActive } = useContext(WeatherContext)
  return (
    <>
      <Container>
        {cards?.map((card: any, index: number) => {
          return (
            <DayCard
              day={card.day}
              key={index}
              humidity={card.humidity}
              className={cardActive === index ? 'default active' : 'default'}
              onClick={() => changeIndex(index)}
            />
          )
        })}
      </Container>
    </>
  )
}
