import { ReactNode, createContext, useState, useEffect } from 'react'
import weatherApi from '../API'

export const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
)

interface WeatherContextData {
  days: any
  changeIndex: (index: number) => void
  cardActive: any
}

interface WeatherProviderProps {
  children: ReactNode
}

export default function WeatherProvider({ children }: WeatherProviderProps) {
  const [wheater, setWheater] = useState([])
  const [cardActive, setCardActive] = useState(0)
  const [days, setDays] = useState([])

  const changeIndex = (index: number) => {
    setCardActive(index)
    console.log(index)
  }

  async function loadWheater() {
    await weatherApi
      .get('data', {
        params: {
          key: 'c8a7131811c04489b3b21dfff10b6f9c',
          lang: 'pt',
          days: 5,
          city: 'São Paulo'
        }
      })
      .then(res => {
        setWheater(res.data)

        const array: any = []
        // desconstrução das informações da api.
        res.data.data.forEach((item: any) => {
          const data = {
            humidity: item.rh,
            day: item.datetime,
            temp: item.temp,
            wind: item.wind_spd,
            condition: item.weather.description
          }

          array.push(data)
          console.log(res.data)
        })
        setDays(array)
      })
  }
  useEffect(() => {
    loadWheater()
  }, [])
  return (
    <WeatherContext.Provider value={{ days, changeIndex, cardActive }}>
      {children}
    </WeatherContext.Provider>
  )
}
