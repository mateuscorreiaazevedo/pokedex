import { Box, Flex, Heading, Image, Stack, Wrap } from '@chakra-ui/react'
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti voluptatem adipisci commodi
            minima dolorem numquam ea sequi et, exercitationem aliquid assumenda dolore odit atque reprehenderit nobis
            porro, error cumque earum quas. Exercitationem qui officia amet cum vel, at adipisci?
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
