import Image from 'next/image'
import { Search } from '../Search'
import * as S from './styles'

interface iDescriptionDayProps {
  temperatureCelcius: number
  humidity: number
  wind: number
  location?: any
  conditions: string
}
export const DescriptionDay = (props: iDescriptionDayProps) => {
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
    <S.Container>
      <Search />
      <S.Description>
        <h3>15:40, terça-feira, 19 de junho, 2022</h3>
        <S.ImageAling>
          {imageConditionRender()}
          <h1>{Math.floor(props.temperatureCelcius)}°C</h1>
        </S.ImageAling>
        <h1>{props.conditions}</h1>
      </S.Description>
      <S.Footer>
        <div>
          <h3>Umidade</h3>
          <p>{props.humidity} %</p>
        </div>
        <div>
          <h3>Velocidade do Vento</h3>
          <p> {Math.floor(props.wind * 3.6)} km/h</p>
        </div>
      </S.Footer>
    </S.Container>
  )
}
