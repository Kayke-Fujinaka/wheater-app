import React from 'react'
import { render } from '@testing-library/react'
import { WheaterPreview } from '../components/WheaterPreview'

describe('WheaterPreview Test', () => {
  test('Testing if it can get Image from Wheater Preview Component', () => {
    const { getByRole } = render(
      <WheaterPreview className="default" day="hoje" onClick={jest.fn()} />
    )
    const getImg = getByRole('img')
    expect(getImg).toBeInTheDocument()
  })

  test('Testing if an image Alt Text exists in the Wheater Preview component', () => {
    const { getByRole } = render(
      <WheaterPreview className="default" day="hoje" onClick={jest.fn()} />
    )
    const getImage = getByRole('img', {
      name: 'Wheater Icon'
    })
    expect(getImage).toBeInTheDocument()
  })

  test('Testing if an heading tag "Umidade" exists in the Wheater Preview component', () => {
    const { getByRole } = render(
      <WheaterPreview className="default" day="hoje" onClick={jest.fn()} />
    )
    const getHeading = getByRole('heading', {
      name: 'Umidade'
    })
    expect(getHeading).toBeInTheDocument()
  })

  test('Testing if get the text "%" in the Wheater Preview component', () => {
    const { getByText } = render(
      <WheaterPreview className="default" day="hoje" onClick={jest.fn()} />
    )
    const getPercent = getByText(/%/i)
    expect(getPercent).toBeInTheDocument()
  })
})
