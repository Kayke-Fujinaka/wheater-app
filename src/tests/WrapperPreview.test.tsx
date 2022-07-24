import React from 'react'
import { render } from '@testing-library/react'
import { WrapperPreview } from '../components/WrapperPreview'

describe('WrapperPreview Test', () => {
  test('Testing if it can get Image from Wheater Preview Component', () => {
    const { getByRole } = render(<WrapperPreview />)
    const getYear = getByRole('heading', {
      name: /hoje/i
    })
    expect(getYear).toBeInTheDocument()
  })
})
