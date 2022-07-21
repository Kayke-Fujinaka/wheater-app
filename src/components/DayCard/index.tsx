import Image from 'next/image'
import { Container } from './styles'

export interface DayCardProps {
  className: string
  day: string
  onClick: () => void
}

const DayCard = (props: DayCardProps) => {
  return (
    <>
      <Container className={props.className} onClick={props.onClick}>
        <h1>{props.day}</h1>
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

export default DayCard
