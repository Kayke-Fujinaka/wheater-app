import Image from 'next/image'
export const DescriptionDay: React.FC = () => (
  <div>
    <h3>15:40, terça-feira, 19 de junho, 2022</h3>
    <div>
      <Image src="/images/overcast-clouds.svg" width="300" height="300" />
      <h1>18°C</h1>
    </div>
    <h1>Nublado</h1>
    <div>
      <table>
        <tr>
          <td>Umidade</td>
          <td>Velocidade do vento</td>
        </tr>
        <tr>
          <td>45%</td>
          <td>20km/h</td>
        </tr>
      </table>
    </div>
  </div>
)
