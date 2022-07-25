import { useContext } from 'react'
import { iDaysData, WeatherContext } from '../../contexts/weather'
import { WheaterPreview } from '../WheaterPreview'

import { Container } from './styles'
interface cardsWrapperProps {
  cards: iDaysData[]
}

export const WrapperPreview = ({ cards }: cardsWrapperProps) => {
  const { changeIndex, cardActive } = useContext(WeatherContext)
  function formatDate(date: string) {
    const [day, preposition, month] = new Date(date)
      .toLocaleDateString('pt-br', {
        month: 'long',
        day: 'numeric'
      })
      .split(' ')
    const abbreviatedDayOfTheWeek = `${day.substring(0, 3)} `
    const formattedDate = [abbreviatedDayOfTheWeek, month]

    return formattedDate.join(`${preposition} `)
  }
  return (
    <>
      <Container>
        {cards.map((card, index) => {
          return (
            <WheaterPreview
              day={formatDate(card.day)}
              key={index}
              humidity={card.humidity}
              className={cardActive === index ? 'default active' : 'default'}
              conditions={card.condition}
              onClick={() => changeIndex(index)}
            />
          )
        })}
      </Container>
    </>
  )
}
