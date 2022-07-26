import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Search } from '../components/Search'

describe('Search Test', () => {
  test('Testing if it can get the "Cidade" text from the label in Search Component', () => {
    const { getByText } = render(<Search />)
    const getLabel = getByText('Cidade')
    expect(getLabel).toBeInTheDocument()
  })

  test('Testing if it can get the "Insira uma Cidade" text from the placeholder input in Search Component', () => {
    const { getByPlaceholderText } = render(
      <Search placeholder="Insira uma Cidade" />
    )
    const getPlaceholder = getByPlaceholderText('Insira uma Cidade')
    expect(getPlaceholder).toBeInTheDocument()
  })

  test('Testing if it can get type "searchbox" of the input from Search Component', () => {
    const { getByRole } = render(
      <Search name="search" id="search" type="search" />
    )
    const getRole = getByRole('searchbox')
    expect(getRole).toBeInTheDocument()
  })

  test('Testing if you can get the input value', () => {
    const { queryByPlaceholderText } = render(
      <Search placeholder="Insira uma Cidade" />
    )
    const searchInput = queryByPlaceholderText('Insira uma Cidade')
    fireEvent.change(searchInput, { target: { value: 'São Paulo' } })
    expect(searchInput.value).toBe('São Paulo')
  })

  test('Testing if the name attribute has the value "search"', () => {
    const { queryByPlaceholderText } = render(
      <Search
        name="search"
        id="search"
        type="search"
        placeholder="Insira uma Cidade"
      />
    )
    const getInput = queryByPlaceholderText('Insira uma Cidade')
    expect(getInput).toHaveAttribute('name', 'search')
  })

  // test('Input change', () => {
  //   const { getByDisplayValue } = render(<Search />)
  //   const valueInput = getByDisplayValue(/são paulo/i)

  //   fireEvent.change(valueInput, {
  //     target: { value: 'Belo Horizonte' }
  //   })
  //   fireEvent.keyPress(valueInput, { key: 'Enter', charCode: 13 })
  //   expect(valueInput.value).toBe('Belo Horizonte')
  // })
})
