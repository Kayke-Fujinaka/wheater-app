import React from 'react'
import Image from 'next/image'
import { Container } from './styles'

interface dayCardProps {
  className: string
  day: string
  onClick: () => void
}

export const WheaterPreview = (props: dayCardProps) => {
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
        <h3>Umidade</h3>
        <p>45%</p>
      </Container>
    </>
  )
}
