import React from 'react'
import { render, screen } from '@testing-library/react'
import { GraphicChart } from '../components/Graphic'

jest.mock('../contexts/weather', () => ({
  useWheater: () => ({ days: jest.fn() })
}))

describe('Graphic Test', () => {
  test('Testing if it can get the "Gráfico" text from the Graphic Component', () => {
    const { getByText } = render(<GraphicChart />)
    screen.logTestingPlaygroundURL()
  })
})
