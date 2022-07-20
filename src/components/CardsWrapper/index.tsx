import { useState } from 'react'
import { DayCard } from '../DayCard'
import { Container } from './styles'

export const CardsWrapper: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(current => !current)
  }

  return (
    <>
      <Container>
        <DayCard
          id="1"
          style={{
            backgroundColor: isActive ? 'hsl(216, 90%, 65%)' : 'hsl(0, 0%, 0%)',
            color: isActive ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 59%)'
          }}
          onClick={handleClick}
        />
        <DayCard
          id="2"
          style={{
            backgroundColor: isActive ? 'hsl(216, 90%, 65%)' : 'hsl(0, 0%, 0%)',
            color: isActive ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 59%)'
          }}
          onClick={handleClick}
        />
        <DayCard
          id="3"
          style={{
            backgroundColor: isActive ? 'hsl(216, 90%, 65%)' : 'hsl(0, 0%, 0%)',
            color: isActive ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 59%)'
          }}
          onClick={handleClick}
        />
        <DayCard
          id="4"
          style={{
            backgroundColor: isActive ? 'hsl(216, 90%, 65%)' : 'hsl(0, 0%, 0%)',
            color: isActive ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 59%)'
          }}
          onClick={handleClick}
        />
      </Container>
    </>
  )
}
