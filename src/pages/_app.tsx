/* eslint-disable multiline-ternary */
import React from 'react'
import { AppProps } from 'next/app'
import { LoadingScreen } from '../components/Loading'
import { GlobalStyle } from '../styles/global'

import WeatherProvider from '../contexts/weather'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 1000)
  }, [])

  return (
    <>
      <WeatherProvider>
        <GlobalStyle />
        {loading ? (
          <React.Fragment>
            <Component {...pageProps} />
          </React.Fragment>
        ) : (
          <LoadingScreen />
        )}
      </WeatherProvider>
    </>
  )
}

export default MyApp
