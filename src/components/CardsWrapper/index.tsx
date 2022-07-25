import { useContext } from 'react'
import { iDaysData, WeatherContext } from '../../contexts/weather'
import { DayCard } from '../DayCard'

import { Container } from './styles'
interface cardsWrapperProps {
  cards: iDaysData[]
}

export const CardsWrapper = ({ cards }: cardsWrapperProps) => {
  const { changeIndex, cardActive } = useContext(WeatherContext)
  return (
    <>
      <Container>
        {cards.map((card, index) => {
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
