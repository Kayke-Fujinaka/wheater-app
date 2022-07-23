import React from 'react'
import { render } from '@testing-library/react'
import { Container } from '../components/Container'

describe('Container Test', () => {
  test('Testing if it can get the "Testando" text from the Container', () => {
    const { getByText } = render(
      <Container>
        <div>
          <div className="wrapper">
            <h1>Testando</h1>
          </div>
        </div>
      </Container>
    )
    const getText = getByText('Testando')
    expect(getText).toBeInTheDocument()
  })
})
