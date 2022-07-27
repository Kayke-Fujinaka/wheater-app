import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface iWeatherProviderProps {
  children: ReactNode
}

export interface iDaysData {
  humidity: number
  day: string
  temp: number
  wind: number
  condition: string
}

export interface iWeatherContextData {
  days: iDaysData[]
  changeIndex: (index: number) => void
  cardActive: number
  setLocationValue: Dispatch<SetStateAction<string>>
  locationValue: string
}
