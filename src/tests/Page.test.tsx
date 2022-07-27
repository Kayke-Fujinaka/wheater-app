// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import Home from '../pages/index'

// const days = [
//   {
//     humidity: 50,
//     day: '2022-07-27',
//     temp: 15,
//     wind: 21,
//     condition: 'Céu Limpo'
//   },
//   {
//     humidity: 76,
//     day: '2022-07-28',
//     temp: 25,
//     wind: 11,
//     condition: 'Poucas nuvens'
//   },
//   {
//     humidity: 21,
//     day: '2022-07-29',
//     temp: 35,
//     wind: 31,
//     condition: 'Céu Limpo'
//   },
//   {
//     humidity: 81,
//     day: '2022-07-30',
//     temp: 10,
//     wind: 41,
//     condition: 'Nuvens quebradas'
//   }
// ]

// jest.mock('../contexts/weather', () => {
//   return {
//     useWheater: () => {
//       return { days: jest.fn(), cardActive: jest.fn() }
//     }
//   }
// })

// describe('Home Test', () => {
//   test('Testing if it can get the "Cidade" text from the label in Home Page', () => {
//     render(<Home />)
//     screen.logTestingPlaygroundURL()
//   })
// })
