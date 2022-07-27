import { imageConditionRender } from '../ImageCondition'
import { Container } from './styles'

interface WheaterPreviewProps {
  conditions: string
  className: string
  day: string
  humidity: number
  onClick: () => void
}
export const WheaterPreview = (props: WheaterPreviewProps) => {
  return (
    <>
      <Container
        data-testid={props.day}
        className={props.className}
        onClick={props.onClick}
      >
        <h1>{props.day}</h1>
        {imageConditionRender({ condition: props.conditions })}
        <p>Umidade</p>
        <h3>{props.humidity}%</h3>
      </Container>
    </>
  )
}
