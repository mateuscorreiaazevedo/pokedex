import { Box, Center, Heading, Image, Stack, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const CardPokemon = (props: any) => {
  const { name, id } = props
  const { colorMode } = useColorMode()
  const bgColorPoke = colorMode === 'light' ? 'teal.100' : 'gray.800'
  return (
    <Link href={`/${name || id}`}>
      <Stack
        cursor="pointer"
        bg={bgColorPoke}
        h="56"
        w="44"
        p="3"
        position="relative"
        borderRadius="xl"
        boxShadow="2xl"
        transition="all 300ms linear"
        zIndex="base"
        _hover={{
          boxShadow: 'dark-lg',
          transform: 'scale(1.1)'
        }}
      >
        <Box
          shadow="md"
          position="absolute"
          bg="red.500"
          left="0"
          top="5"
          minW="8"
          w="auto"
          borderRightRadius="base"
          color="white"
          fontWeight="bold"
          textAlign="center"
        >
          {id}
        </Box>
        <Center>
          <Image w="36" h="36" src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`} alt={name} />
        </Center>
        <Heading mb="2" textTransform="capitalize" fontSize="2xl" color="red.500" w="full" textAlign="center">
          {name}
        </Heading>
      </Stack>
    </Link>
  )
}
