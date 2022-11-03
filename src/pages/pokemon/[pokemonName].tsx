import { Box, Flex, Heading, Image, useColorMode } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { Abilities } from '../../components/abilities'
import { TitleHead } from '../../components/head'
import { IdCard } from '../../components/id-card'
import { Types } from '../../components/type'
import { PokeService } from '../../services/pokemon'

const Pokemon = ({ pokemon }) => {
  const { colorMode } = useColorMode()
  const bgColorPoke = colorMode === 'light' ? 'teal.100' : 'gray.800'
  return (
    <>
      <TitleHead title={`${pokemon.name} | Pokedex`} />
      <Flex
        position="relative"
        bg={bgColorPoke}
        shadow="dark-lg"
        px="24"
        py="5"
        my="20"
        borderRadius="2xl"
        justifyContent="space-around"
        wrap="wrap"
      >
        <IdCard id={pokemon.id} rest={{ minW: 10, fontSize: '2xl' }} />
        <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} w="xl" minW="40" />
        <Box>
          <Heading
            sx={{
              '@media (max-width: 425px)': {
                fontSize: '4xl'
              }
            }}
            fontSize="5xl"
            textTransform="capitalize"
            color="red.500"
          >
            {pokemon.name}
          </Heading>
          <Types pokemon={pokemon} />
          <Abilities pokemon={pokemon} />
        </Box>
      </Flex>
    </>
  )
}

export default Pokemon

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await PokeService.getAll()
  const paths = data.results.map((pokemon: any) => {
    return {
      params: { pokemonName: pokemon.name }
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  const name = params.pokemonName
  const data = await PokeService.getByName(name as string)
  return {
    props: {
      pokemon: data
    }
  }
}
