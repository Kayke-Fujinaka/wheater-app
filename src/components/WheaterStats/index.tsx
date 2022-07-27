import { imageConditionRender } from '../ImageCondition'
import { Search } from '../Search'
import * as S from './styles'

interface iWheaterStatsProps {
  temperatureCelcius: number
  humidity: number
  wind: number
  conditions: string
}
export const WheaterStats = (props: iWheaterStatsProps) => {
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
        <h3>tem que arrumar</h3>
        <S.ImageAling>
          {imageConditionRender({ condition: props.conditions })}
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
