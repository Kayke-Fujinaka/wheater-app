import { useContext, useState } from 'react'
import { WeatherContext } from '../../contexts/weather'
import { Container } from './styles'

export function Search() {
  const { setLocationValue } = useContext(WeatherContext)
  const [inputValue, setInputValue] = useState('São Paulo')
  function handleSubmit(e: { key: string }) {
    if (e.key === 'Enter') {
      setLocationValue(inputValue)
    }
  }
  return (
    <Container>
      <h3>Cidade</h3>

      <input
        type="search"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Insira cidade"
        autoComplete="on"
        onKeyPress={handleSubmit}
      />
    </Container>
  )
}
