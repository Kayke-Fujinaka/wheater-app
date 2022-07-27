import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

jest.mock('../contexts/weather', () => {
  return {
    useWheater: () => {
      return { setLocationValue: jest.fn() }
    }
  }
})

describe('Home Test', () => {
  test('Testing if it can get the "Cidade" text from the label in Home Page', () => {
    const { getByText } = render(<Home />)
    const getLabel = getByText('Cidade')
    expect(getLabel).toBeInTheDocument()
  })
})
