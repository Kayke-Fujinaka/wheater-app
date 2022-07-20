import Image from 'next/image'
import * as S from './styles'
export const DescriptionDay: React.FC = () => (
  <S.Container>
    <S.Description>
      <h3>15:40, terça-feira, 19 de junho, 2022</h3>
      <S.ImageAling>
        <Image src="/images/overcast-clouds.svg" width="47" height="30" />
        <h1>18°C</h1>
      </S.ImageAling>
      <h1>Nublado</h1>
    </S.Description>
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
