import { ThemeProvider } from '../contexts/theme-context'
import { Layout } from '../components/layout'
import { AppProps } from 'next/app'
import React from 'react'
import { Loading } from '../components/spinner-page'



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Layout>
        <Loading />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
