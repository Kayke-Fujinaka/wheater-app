import Image from 'next/image'
import { CurrentDataTime } from '../CurrentDataTime'
import { Search } from '../Search'
import * as S from './styles'

interface iWheaterStatsProps {
  temperatureCelcius: number
  humidity: number
  wind: number
  location?: string
  conditions: string
}
export const WheaterStats = (props: iWheaterStatsProps) => {
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
      <Search
        htmlFor="label"
        name="search"
        id="search"
        type="search"
        placeholder="Insira uma Cidade"
      />
      <S.Stats>
        <CurrentDataTime />
        <S.ImageAling>
          {imageConditionRender()}
          <h2>{Math.floor(props.temperatureCelcius)}°C</h2>
        </S.ImageAling>
        <h2>{props.conditions}</h2>
      </S.Stats>
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
