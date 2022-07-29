import React from 'react'
import { render } from '@testing-library/react'
import { WheaterStats } from '../components/WheaterStats'

describe('WheaterStats Test', () => {
  test('Testing if it can get the "Cidade" text from the label in input in the Wheater Stats component', () => {
    const { getByText } = render(
      <WheaterStats
        conditions="Poucas nuvens"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getLabelText = getByText('Cidade')
    expect(getLabelText).toBeInTheDocument()
  })

  test('Testing if it can get the "Insira uma Cidade" text from the placeholder input in Wheater Stats Component', () => {
    const { getByPlaceholderText } = render(
      <WheaterStats
        conditions="Poucas nuvens"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getPlaceholder = getByPlaceholderText('Insira uma Cidade')
    expect(getPlaceholder).toBeInTheDocument()
  })

  test('Testing manages to get the value of celsius in wheater stats', () => {
    const { getByText } = render(
      <WheaterStats
        conditions="Poucas nuvens"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getCelsiusText = getByText(/°c/i)
    expect(getCelsiusText).toBeInTheDocument()
  })

  test('Testing if an heading tag "Umidade" exists in the Wheater Stats component', () => {
    const { getByText } = render(
      <WheaterStats
        conditions="Poucas nuvens"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getHumidity = getByText('Umidade')
    expect(getHumidity).toBeInTheDocument()
  })

  test('Testing if get the text "%" in the Wheater Stats component', () => {
    const { getByText } = render(
      <WheaterStats
        conditions="Poucas nuvens"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getPercent = getByText(/%/i)
    expect(getPercent).toBeInTheDocument()
  })

  test('Testing if an heading tag "Velocidade do Vento" exists in the Wheater Stats component', () => {
    const { getByText } = render(
      <WheaterStats
        conditions="Poucas nuvens"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getWPH = getByText('Velocidade do Vento')
    expect(getWPH).toBeInTheDocument()
  })

  test('Testing if get the text "km/h" in the Wheater Stats component', () => {
    const { getByText } = render(
      <WheaterStats
        conditions="Poucas nuvens"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getKmPerHour = getByText(/km\/h/i)
    expect(getKmPerHour).toBeInTheDocument()
  })
})
