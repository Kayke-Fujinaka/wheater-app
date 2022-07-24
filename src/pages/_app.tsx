import React from 'react'
import { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'

import WeatherProvider from '../contexts/weather'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <WeatherProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </WeatherProvider>
    </>
  )
}

export default MyApp
