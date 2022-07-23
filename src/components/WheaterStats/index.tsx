import React from 'react'
import Image from 'next/image'
import { Search } from '../Search'
import * as S from './styles'
export const WheaterStats = () => (
  <S.Container>
    <Search
      htmlFor="label"
      name="search"
      id="search"
      type="search"
      placeholder="Insira uma Cidade"
    />
    <S.Stats>
      <h1>15:40, terça-feira, 19 de junho, 2022</h1>
      <S.ImageAling>
        <Image src="/images/overcast-clouds.svg" width="47" height="30" />
        <h2>18°C</h2>
      </S.ImageAling>
      <h2>Nublado</h2>
    </S.Stats>
    <S.Footer>
      <div>
        <h3>Umidade</h3>
        <p>45%</p>
      </div>
      <div>
        <h3>Velocidade do Vento</h3>
        <p>20km/h</p>
      </div>
    </S.Footer>
  </S.Container>
)
