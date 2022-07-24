import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Graphic Test', () => {
  test('Testing if it can get the "Cidade" text from the label in Home Page', () => {
    const { getByText } = render(<Home />)
    const getLabel = getByText('Cidade')
    expect(getLabel).toBeInTheDocument()
  })

  test('Testing if it can get the "Insira uma Cidade" text from the placeholder input in Home Page', () => {
    const { getByPlaceholderText } = render(<Home />)
    const getPlaceholder = getByPlaceholderText('Insira uma Cidade')
    expect(getPlaceholder).toBeInTheDocument()
  })

  test('Testing if it can get type "searchbox" of the input from Home Page', () => {
    const { getByRole } = render(<Home />)
    const getRole = getByRole('searchbox')
    expect(getRole).toBeInTheDocument()
  })

  test('Testing if it can get the "Gráfico" text from the Home Page', () => {
    const { getByText } = render(<Home />)
    const getText = getByText('Gráfico')
    expect(getText).toBeInTheDocument()
  })
})
