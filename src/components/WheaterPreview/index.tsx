import { imageConditionRender } from '../ImageCondition'
import { Container } from './styles'

interface WheaterPreviewProps {
  conditions: any
  className: string
  day: string
  humidity: number
  onClick: () => void
}

export const WheaterPreview = (props: WheaterPreviewProps) => {
  return (
    <>
      <Container className={props.className} onClick={props.onClick}>
        <h1>{props.day}</h1>
        {imageConditionRender(props)}
        <p>Umidade</p>
        <h3>{props.humidity}%</h3>
      </Container>
    </>
  )
}
