/* eslint-disable react/no-children-prop */
import React from 'react'
import { render } from '@testing-library/react'
import { Container } from '../components/Container'

describe('Container Test', () => {
  test('Testing if it can get the "Wheater App" text from the Container', () => {
    const { getByText } = render(
      <Container>
        <p>Wheater App</p>
      </Container>
    )
    const getText = getByText('Wheater App')
    expect(getText).toBeInTheDocument()
  })

  test('Testing if it can get the "Testing" text from the Container', () => {
    const { getByText } = render(
      <Container>
        <div>
          <div className="wrapper">
            <h1>Testing</h1>
          </div>
        </div>
      </Container>
    )
    const getText = getByText('Testing')
    expect(getText).toBeInTheDocument()
  })

  test('Testing if it can get the value "content" text from the Container', () => {
    const { getByText } = render(<Container children="content" />)
    const getText = getByText('content')
    expect(getText).toBeInTheDocument()
  })
})
