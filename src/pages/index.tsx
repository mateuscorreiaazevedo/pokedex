import { TitleHead } from '../components/head'
import { Image } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <>
      <TitleHead title="Pokedex | Next App" />
      <Image w="container.sm" src="/assets/pokeball.png" />
    </>
  )
}

export default Home
