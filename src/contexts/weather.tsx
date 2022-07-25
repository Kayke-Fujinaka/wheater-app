import { ReactNode, createContext, useState, useEffect } from 'react'
import weatherApi from '../API'

export const WeatherContext = createContext<iWeatherContextData>(
  {} as iWeatherContextData
)

interface iWeatherContextData {
  days: object
  changeIndex: (index: number) => void
  cardActive: number
}

interface iWeatherProviderProps {
  children: ReactNode
}

export default function WeatherProvider({ children }: iWeatherProviderProps) {
  const [wheater, setWheater] = useState([])
  const [cardActive, setCardActive] = useState(0)
  const [days, setDays] = useState([])

  const changeIndex = (index: number) => {
    setCardActive(index)
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

        const descontrutionData: any = []
        // desconstrução das informações da api.
        res.data.data.forEach(
          (item: {
            rh: number
            datetime: string
            temp: number
            wind_spd: number
            weather: { description: string }
          }) => {
            const data = {
              humidity: item.rh,
              day: item.datetime,
              temp: item.temp,
              wind: item.wind_spd,
              condition: item.weather.description
            }
            descontrutionData.push(data)
          }
        )
        setDays(descontrutionData)
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
