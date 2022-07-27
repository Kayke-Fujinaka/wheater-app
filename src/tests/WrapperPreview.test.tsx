import { fireEvent, render, screen } from '@testing-library/react'
import { useWheater } from '../contexts/weather'
import React from 'react'

import { WrapperPreview } from '../components/WrapperPreview'

describe('WrapperPreview Test', () => {
  const cards = [
    {
      humidity: 50,
      day: '2022-07-27',
      temp: 15,
      wind: 21,
      condition: 'Céu Limpo'
    },
    {
      humidity: 76,
      day: '2022-07-28',
      temp: 25,
      wind: 11,
      condition: 'Poucas nuvens'
    },
    {
      humidity: 21,
      day: '2022-07-29',
      temp: 35,
      wind: 31,
      condition: 'Céu Limpo'
    },
    {
      humidity: 81,
      day: '2022-07-30',
      temp: 10,
      wind: 41,
      condition: 'Nuvens quebradas'
    }
  ]

  jest.mock('../contexts/weather')

  describe('WrapperPreview Test', () => {
    test('Testing if get PercentHumidy in Wrapper Preview', () => {
      render(<WrapperPreview cards={cards} />)
      const getPercentHumidy = screen.getByRole('heading', {
        name: /76%/i
      })
      expect(getPercentHumidy).toBeInTheDocument()
    })

    // test('Testing if get style clicked card in Wrapper Preview', () => {
    //   const { getByText } = render(<WrapperPreview cards={cards} />)
    //   const mock = jest.mocked(useWheater)
    //   mock.mockImplementation(() => {
    //     return {
    //       changeIndex: jest.fn()
    //     } as any
    //   })
    //   const getCardActive = getByText('27 de julho')
    //   fireEvent.click(getCardActive)
    //   expect(getCardActive).toHaveStyle(
    //     'background-color: var(--card-blue-color);'
    //   )
    // })
  })
})
