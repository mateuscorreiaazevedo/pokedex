import { Box, Flex, Heading, Image, Link, Stack } from '@chakra-ui/react'
import { animationPokeball } from '../../components/header'
import { TitleHead } from '../../components/head'
import React from 'react'

const About = () => {
  return (
    <>
      <TitleHead title="About us | Pokedex" />
      <Stack spacing="10" as="section">
        <Heading fontSize="6xl" as="h1">
          About us
        </Heading>
        <Flex as="article" justifyContent="center" wrap="wrap">
          <Box as="span" fontSize="lg" textAlign="justify" w="2xl">
            Pokédex feita a partir da api <Link href="https://pokeapi.co/">PokéAPI</Link> utilizando NextJs e Chakra ui
            para a estilização, com cerca de 600 pokémons e suas páginas individuais! Espero que gostem!! "Vai Pikachu!"
          </Box>
          <Image
            src="./assets/pokeball.png"
            minW="30%"
            w="30%"
            maxW="1200px"
            animation={`${animationPokeball} 2s ease-out infinite`}
          />
        </Flex>
      </Stack>
    </>
  )
}

export default About
