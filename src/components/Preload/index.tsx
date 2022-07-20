import Image from 'next/image'
import { Container } from './styles'
const img = require('../../assets/cloud.svg')

export function Preload() {
  return (
    <Container>
      <div className="loading__image">
        <Image src={img} alt="Rainy cloud" width="200" height="200" />
      </div>

      <div className="loading__bar">
        <div className="loading__fill"></div>
      </div>
    </Container>
  )
}
