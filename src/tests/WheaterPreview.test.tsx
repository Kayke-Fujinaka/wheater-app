import React from 'react'
import { render } from '@testing-library/react'
import { WheaterPreview } from '../components/WheaterPreview'

describe('WheaterPreview Test', () => {
  test('Testing if it can get Image from Wheater Preview Component', () => {
    const { getByRole } = render(
      <WheaterPreview
        conditions="Chuva Moderada"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImg = getByRole('img')
    expect(getImg).toBeInTheDocument()
  })

  test('Testing if an image Alt Text exists in the Wheater Preview component', () => {
    const { getByRole } = render(
      <WheaterPreview
        conditions="Chuva Moderada"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImage = getByRole('img', {
      name: 'Wheater Icon'
    })
    expect(getImage).toBeInTheDocument()
  })

  test('Testing if an heading tag "Umidade" exists in the Wheater Preview component', () => {
    const { getByText } = render(
      <WheaterPreview
        conditions="Chuva Moderada"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getHeading = getByText(/umidade/i)
    expect(getHeading).toBeInTheDocument()
  })

  test('Testing if get the text "%" in the Wheater Preview component', () => {
    const { getByText } = render(
      <WheaterPreview
        conditions="Chuva Moderada"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getPercent = getByText(/%/i)
    expect(getPercent).toBeInTheDocument()
  })

  test('Testing if get case "Poucas nuvens" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Poucas nuvens"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Nuvens dispersas" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Nuvens dispersas"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Céu limpo" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Céu limpo"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Tempestade com chuva" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Tempestade com chuva"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Chuva fraca" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Chuva fraca"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Chuva forte" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Chuva forte"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Chuva moderada" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Chuva moderada"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Nuvens quebradas" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Nuvens quebradas"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Tempestade com chuva forte" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Tempestade com chuva forte"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Nevando" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Nevando"
        humidity={12}
        className="default"
        day="hoje"
        onClick={jest.fn()}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })
})
