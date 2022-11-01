import { Heading } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <>
      <Head>
        <title>Next</title>
      </Head>
      <div>
        <Heading>Hello World</Heading>
      </div>
    </>
  )
}

export default Home
