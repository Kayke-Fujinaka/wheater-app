import React from 'react'
import Image from 'next/image'
import { Search } from '../Search'
import * as S from './styles'

interface WheaterStatsProps {
  temperatureCelcius: any
  humidity: string
  wind: string
  location?: string
  conditions?: string
}

export const WheaterStats = ({
  temperatureCelcius,
  humidity,
  wind,
  location,
  conditions
}: WheaterStatsProps) => (
  <S.Container>
    <Search
      htmlFor="label"
      name="search"
      id="search"
      type="search"
      placeholder="Insira uma Cidade"
      location={location}
    />
    <S.Stats>
      <h3>15:40, terça-feira, 19 de junho, 2022</h3>
      <S.ImageAling>
        <Image src={'/images/overcast-clouds.svg'} width="47" height="30" />
        <h1>{temperatureCelcius}</h1>
      </S.ImageAling>
      <h1>{conditions}</h1>
    </S.Stats>
    <S.Footer>
      <div>
        <h3>Umidade</h3>
        <p>{humidity}%</p>
      </div>
      <div>
        <h3>Velocidade do Vento</h3>
        <p> {wind}km/h</p>
      </div>
    </S.Footer>
  </S.Container>
)
