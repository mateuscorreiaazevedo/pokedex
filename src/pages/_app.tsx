import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from '../contexts/theme-context'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
