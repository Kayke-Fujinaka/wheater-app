import React from 'react'
import Image from 'next/image'
import { Container } from './styles'

interface dayCardProps {
  className: string
  day: string
  humidity: number
  onClick: () => void
}

export const WheaterPreview = ({
  className,
  onClick,
  day,
  humidity
}: dayCardProps) => {
  return (
    <>
      <Container className={className} onClick={onClick}>
        <h1>{day}</h1>
        <Image
          src={'/images/broken-clouds-day.svg'}
          alt="Wheater Icon"
          width={50}
          height={50}
        />
        <p>Umidade</p>
        <h3>{humidity}%</h3>
      </Container>
    </>
  )
}
