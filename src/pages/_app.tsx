import { AppProps } from 'next/app'
import React from 'react'
import { Layout } from '../components/layout'
import { ThemeProvider } from '../contexts/theme-context'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
