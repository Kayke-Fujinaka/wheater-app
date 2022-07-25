import Image from 'next/image'
import { Container } from './styles'

interface WheaterPreviewProps {
  conditions: any
  className: string
  day: string
  humidity: number
  onClick: () => void
}

export const WheaterPreview = (props: WheaterPreviewProps) => {
  function imageConditionRender() {
    switch (props.conditions) {
      case 'Poucas nuvens':
        return <Image src="/scatteredClouds.svg" width="47" height="30" />
      case 'Nuvens dispersas':
        return <Image src="/scatteredClouds.svg" width="47" height="30" />
      case 'Céu limpo':
        return <Image src="/sun.svg" width="47" height="30" />
      case 'Tempestade com chuva':
        return <Image src="/storm.svg" width="47" height="30" />
      case 'Chuva fraca':
        return <Image src="/rain.svg" width="47" height="30" />
      case 'Chuva forte':
        return <Image src="/rain.svg" width="47" height="30" />
      case 'Chuva moderada':
        return <Image src="/rain.svg" width="47" height="30" />
      case 'Nuvens quebradas':
        return <Image src="/scatteredClouds.svg" width="47" height="30" />
      case 'Tempestade com chuva forte':
        return <Image src="/storm.svg" width="47" height="30" />
      default:
        return <Image src="/cloud.svg" width="47" height="30" />
    }
  }
  return (
    <>
      <Container className={props.className} onClick={props.onClick}>
        <h1>{props.day}</h1>
        {imageConditionRender()}
        <p>Umidade</p>
        <h3>{props.humidity}%</h3>
      </Container>
    </>
  )
}
