import React from 'react'
import { render } from '@testing-library/react'
import { LoadingScreen } from '../components/Loading'

describe('Loading Test', () => {
  test('Testing if an image Alt Text exists in the Loading component', () => {
    const { getByRole } = render(<LoadingScreen />)
    const getImage = getByRole('img', {
      name: 'Wheater Icon'
    })
    expect(getImage).toBeInTheDocument()
  })
})
