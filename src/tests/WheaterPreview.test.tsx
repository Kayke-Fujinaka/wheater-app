import React from 'react'
import { render } from '@testing-library/react'
import { WheaterPreview } from '../components/WheaterPreview'

describe('WheaterPreview Test', () => {
  test('Testing if an image tag exists in the Wheater Preview component', () => {
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
})
