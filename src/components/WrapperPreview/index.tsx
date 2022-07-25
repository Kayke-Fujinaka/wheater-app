import { useContext } from 'react'
import { WeatherContext } from '../../contexts/weather'
import { WheaterPreview } from '../WheaterPreview'

import { Container } from './styles'
interface cardsWrapperProps {
  cards: any
}

export const WrapperPreview = ({ cards }: cardsWrapperProps) => {
  const { changeIndex, cardActive } = useContext(WeatherContext)
  return (
    <>
      <Container>
        {cards?.map((card: any, index: number) => {
          return (
            <WheaterPreview
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
