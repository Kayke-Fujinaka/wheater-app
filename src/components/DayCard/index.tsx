/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import { Container } from './styles'

interface dayCardProps {
  className: string
  day: string
  onClick: () => void
}

export const DayCard = (props: dayCardProps) => {
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
