import { useContext } from 'react'
import { iDaysData, WeatherContext } from '../../contexts/weather'
import { DayCard } from '../DayCard'

import { Container } from './styles'
interface cardsWrapperProps {
  cards: iDaysData[]
}

export const CardsWrapper = ({ cards }: cardsWrapperProps) => {
  const { changeIndex, cardActive } = useContext(WeatherContext)
  function formatDate(date: string) {
    const [weekday, month, day] = new Date(date)
      .toLocaleDateString('pt-br', {
        month: 'long',
        day: 'numeric'
      })
      .split(' ')
    const abbreviatedDayOfTheWeek = `${weekday.substring(0, 3)} `
    const formattedDate = [abbreviatedDayOfTheWeek, day]

    return formattedDate.join('de ')
  }
  return (
    <>
      <Container>
        {cards.map((card, index) => {
          return (
            <DayCard
              day={formatDate(card.day)}
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
