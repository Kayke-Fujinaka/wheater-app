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

  test('Testing if it can get Image from Wheater Stats Component', () => {
    const { getByRole } = render(
      <WheaterStats
        conditions="Poucas nuvens"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getImg = getByRole('img')
    expect(getImg).toBeInTheDocument()
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

  test('Testing if get case "Poucas nuvens" in Wheater Preview', () => {
    const { getByRole } = render(
      <WheaterStats
        conditions="Poucas nuvens"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getImage = getByRole('img')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Nuvens dispersas" in Wheater Preview', () => {
    const { getByRole } = render(
      <WheaterStats
        conditions="Nuvens dispersas"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getImage = getByRole('img')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Céu limpo" in Wheater Preview', () => {
    const { getByRole } = render(
      <WheaterStats
        conditions="Céu limpo"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getImage = getByRole('img')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Tempestade com chuva" in Wheater Preview', () => {
    const { getByRole } = render(
      <WheaterStats
        conditions="Tempestade com chuva"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getImage = getByRole('img')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Chuva fraca" in Wheater Preview', () => {
    const { getByRole } = render(
      <WheaterStats
        conditions="Chuva fraca"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getImage = getByRole('img')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Chuva forte" in Wheater Preview', () => {
    const { getByRole } = render(
      <WheaterStats
        conditions="Chuva forte"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getImage = getByRole('img')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Chuva moderada" in Wheater Preview', () => {
    const { getByRole } = render(
      <WheaterStats
        conditions="Chuva moderada"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getImage = getByRole('img')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Nuvens quebradas" in Wheater Preview', () => {
    const { getByRole } = render(
      <WheaterStats
        conditions="Nuvens quebradas"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getImage = getByRole('img')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Tempestade com chuva forte" in Wheater Preview', () => {
    const { getByRole } = render(
      <WheaterStats
        conditions="Tempestade com chuva forte"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getImage = getByRole('img')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case Default in Wheater Preview', () => {
    const { getByRole } = render(
      <WheaterStats
        conditions="Nevando"
        temperatureCelcius={21}
        humidity={44}
        wind={10}
      />
    )
    const getImage = getByRole('img')
    expect(getImage).toHaveAttribute('src')
  })
})
