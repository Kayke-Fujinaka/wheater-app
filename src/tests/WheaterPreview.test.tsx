import React from 'react'
import { render } from '@testing-library/react'
import { WheaterPreview } from '../components/WheaterPreview'

const data = {
  conditions: 'Chuva Moderada',
  classname: 'default',
  day: 'hoje',
  humidity: 44,
  onclick: jest.fn()
}

describe('WheaterPreview Test', () => {
  test('Testing if it can get Image from Wheater Preview Component', () => {
    const { getByRole } = render(
      <WheaterPreview
        conditions={data.conditions}
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImg = getByRole('img')
    expect(getImg).toBeInTheDocument()
  })

  test('Testing if an image Alt Text exists in the Wheater Preview component', () => {
    const { getByRole } = render(
      <WheaterPreview
        conditions={data.conditions}
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
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
        conditions={data.conditions}
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getHeading = getByText(/umidade/i)
    expect(getHeading).toBeInTheDocument()
  })

  test('Testing if get the text "%" in the Wheater Preview component', () => {
    const { getByText } = render(
      <WheaterPreview
        conditions={data.conditions}
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getPercent = getByText(/%/i)
    expect(getPercent).toBeInTheDocument()
  })

  test('Testing if get case "Poucas nuvens" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Poucas nuvens"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Nuvens dispersas" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Nuvens dispersas"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Céu limpo" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Céu limpo"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Tempestade com chuva" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Tempestade com chuva"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Chuva fraca" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Chuva fraca"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Chuva forte" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Chuva forte"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case {data.conditions} in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions={data.conditions}
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Nuvens quebradas" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Nuvens quebradas"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Tempestade com chuva forte" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Tempestade com chuva forte"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Nevando" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Nevando"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })
})
