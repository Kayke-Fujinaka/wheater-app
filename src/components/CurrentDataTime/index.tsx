import { RealTime } from './styles'
export const CurrentDataTime = () => {
  const data = new Date()
  const day = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ][data.getDay()]
  const date = data.getDate()
  const month = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ][data.getMonth()]
  const year = data.getFullYear()
  const timer = new Date().toLocaleTimeString().slice(0, 5)
  return <RealTime>{`${timer}, ${day}, ${date} de ${month}, ${year}`}</RealTime>
}
