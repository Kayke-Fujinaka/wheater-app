import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { WrapperPreview } from '../components/WrapperPreview'

beforeEach(function () {
  render(<WrapperPreview />)
})

describe('WrapperPreview Test', () => {
  test('Testing if it can get "Hoje" heading from Wheater Preview Component', () => {
    const getDay = screen.getByRole('heading', {
      name: /hoje/i
    })
    expect(getDay).toBeInTheDocument()
  })

  test('Testing if it can get style of the clicked card from Wheater Preview Component', () => {
    const getCardColor = screen.getByRole('heading', {
      name: /hoje/i
    })
    fireEvent.click(getCardColor)
    expect(getCardColor).toHaveStyle(
      'background-color: var(--card-blue-color);'
    )
  })
})
