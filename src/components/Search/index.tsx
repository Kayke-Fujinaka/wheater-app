import { useContext, useState } from 'react'
import { WeatherContext } from '../../contexts/weather'
import { Container } from './styles'

interface SearchProps {
  htmlFor: string
  name: string
  id: string
  type: string
  placeholder: string
}

export function Search(props: SearchProps) {
  const { setLocationValue } = useContext(WeatherContext)
  const [inputValue, setInputValue] = useState('São Paulo')
  function handleSubmit(e: { key: string }) {
    if (e.key === 'Enter') {
      setLocationValue(inputValue)
    }
  }
  return (
    <Container>
      <label htmlFor={props.htmlFor}>Cidade</label>

      <input
        name={props.name}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        onKeyPress={handleSubmit}
      />
    </Container>
  )
}
