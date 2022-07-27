import { iDaysData, useWheater } from '../../contexts/weather'
import { formatDate } from '../../utils/formatDate'
import { WheaterPreview } from '../WheaterPreview'

import { Container } from './styles'
interface cardsWrapperProps {
  cards: iDaysData[]
}

export const WrapperPreview = ({ cards }: cardsWrapperProps) => {
  const { changeIndex, cardActive } = useWheater()

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
