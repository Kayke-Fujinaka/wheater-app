import React from 'react'
import { render } from '@testing-library/react'
import { Graphic } from '../components/Graphic'

describe('Graphic Test', () => {
  test('Testing if it can get the "Gráfico" text from the Graphic Component', () => {
    const { getByText } = render(<Graphic />)
    const getText = getByText('Gráfico')
    expect(getText).toBeInTheDocument()
  })
})
