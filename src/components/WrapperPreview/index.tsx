import { useWheater } from '../../contexts/weather'
import { iDaysData } from '../../types/WheaterApiResponse'
import { formatDate } from '../../utils/formatDate'
import { WheaterPreview } from '../WheaterPreview'
import { Container, Carrousel } from './styles'
interface iCardsWrapperProps {
  cards: iDaysData[]
}

export const WrapperPreview = ({ cards }: iCardsWrapperProps) => {
  const { changeIndex, cardActive } = useWheater()

  return (
    <>
      <Carrousel>
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
      </Carrousel>
    </>
  )
}
