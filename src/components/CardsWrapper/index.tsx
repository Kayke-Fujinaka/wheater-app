import { useState } from 'react'
import { DayCard } from '../DayCard'
import { Container } from './styles'

export const CardsWrapper: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  const cards = [1, 2, 3, 4]

  const onChange = () => {
    setIsActive(current => !current)
  }

  return (
    <>
      <Container>
        {cards.map(card => {
          return (
            <DayCard
              key={card}
              style={{
                backgroundColor: isActive
                  ? 'hsl(216, 90%, 65%)'
                  : 'hsl(0, 0%, 0%)',
                color: isActive ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 59%)'
              }}
              onClick={onChange}
            />
          )
        })}
      </Container>
    </>
  )
}
