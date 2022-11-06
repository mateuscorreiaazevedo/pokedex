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
            Pokédex feita a partir da api{' '}
            <Link href="https://pokeapi.co/" target="_blank" fontWeight="bold">
              PokéAPI
            </Link>{' '}
            utilizando{' '}
            <Link target="_blank" fontWeight="bold" href="https://nextjs.org/">
              NextJs
            </Link>{' '}
            e{' '}
            <Link target="_blank" fontWeight="bold" href="https://chakra-ui.com/">
              Chakra ui
            </Link>{' '}
            para a estilização, com cerca de 100 pokémons e suas páginas individuais! Espero que gostem! "Vai Pikachu!"
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
