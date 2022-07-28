import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback
} from 'react'
import {
  iWeatherProviderProps,
  iDaysData,
  iWeatherContextData
} from '../types/WheaterApiResponse'
import weatherApi from '../API'

const WeatherContext = createContext<iWeatherContextData>(
  {} as iWeatherContextData
)

export default function WeatherProvider({ children }: iWeatherProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [wheater, setWheater] = useState([])
  const [cardActive, setCardActive] = useState(0)
  const [days, setDays] = useState<iDaysData[]>([])
  const [locationValue, setLocationValue] = useState('São Paulo')
  // const changeIndex = (index: number) => {
  //   setCardActive(index)
  // }

  const changeIndex = useCallback((index: number) => {
    setCardActive(index)
  }, [])

  async function loadWheater() {
    await weatherApi
      .get('data', {
        params: {
          key: 'cc2ac1d511234aa1a6e63c24ea3c1c77',
          lang: 'pt',
          days: 4,
          city: locationValue
        }
      })
      .then(res => {
        setWheater(res.data)

        const daysData: iDaysData[] = []
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
            daysData.push(data)
          }
        )
        setDays(daysData)
      })
  }
  useEffect(() => {
    loadWheater()
  }, [locationValue])

  return (
    <WeatherContext.Provider
      value={{ days, changeIndex, cardActive, setLocationValue, locationValue }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export const useWheater = () => useContext(WeatherContext)
