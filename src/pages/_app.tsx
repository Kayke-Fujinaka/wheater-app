/* eslint-disable prettier/prettier */
import React from 'react'
import { AppProps } from 'next/app'
import { LoadingScreen } from '../components/Loading'
import { GlobalStyle } from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 5000)
  }, [])

  return (
    <>
      <GlobalStyle />
      {loading
        ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
          )
        : (
        <LoadingScreen />
          )}
    </>
  )
}

export default MyApp
