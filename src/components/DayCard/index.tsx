import Image from 'next/image'
import { Container } from './styles'

interface dayCardProps {
  style: {
    backgroundColor: string | undefined
    color: string | undefined
  }
  onClick: () => void
}

export const DayCard = (props: dayCardProps) => {
  return (
    <>
      <Container style={props.style} onClick={props.onClick}>
        <h1>Hoje</h1>
        <Image
          src={'/images/broken-clouds-day.svg'}
          alt="Wheater Icon"
          width={50}
          height={50}
        />
        <p>Umidade</p>
        <h3>45%</h3>
      </Container>
    </>
  )
}
