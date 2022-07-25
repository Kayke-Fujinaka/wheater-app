import Image from 'next/image'
import { Search } from '../Search'
import * as S from './styles'

interface DescriptionDayProps {
  temperatureCelcius: number
  humidity: number
  wind: number
  location: string
  conditions: string
}

export const DescriptionDay = ({
  temperatureCelcius,
  humidity,
  wind,
  location,
  conditions
}: DescriptionDayProps) => (
  <S.Container>
    <Search location={location} />
    <S.Description>
      <h3>15:40, terça-feira, 19 de junho, 2022</h3>
      <S.ImageAling>
        <Image src={'/images/overcast-clouds.svg'} width="47" height="30" />
        <h1>{temperatureCelcius}</h1>
      </S.ImageAling>
      <h1>{conditions}</h1>
    </S.Description>
    <S.Footer>
      <div>
        <h3>Umidade</h3>
        <p>{humidity} %</p>
      </div>
      <div>
        <h3>Velocidade do Vento</h3>
        <p> {Math.floor(wind * 3.6)} km/h</p>
      </div>
    </S.Footer>
  </S.Container>
)
