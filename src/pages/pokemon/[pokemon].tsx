import { Box, Center, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { LoadingFallback } from '../../components/loading-fallback'
import { Abilities } from '../../components/abilities'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PokeService } from '../../services/pokemon'
import { TitleHead } from '../../components/head'
import { IdCard } from '../../components/id-card'
import { Types } from '../../components/type'
import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'

const Pokemon = ({ pokemon }) => {
  const bgColorPoke = useColorModeValue('teal.100', 'gray.800')
  const router = useRouter()

  if (router.isFallback) {
    return <LoadingFallback />
  }

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
        <Center w="xl" minW="40%">
          <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width="1000"
            height="1000"
            alt={pokemon.name}
          />
        </Center>
        <Box>
          <Heading fontSize={{ md: '4xl' }} textTransform="capitalize" color="red.500">
            {pokemon.name}
          </Heading>
          <Types pokemon={pokemon} />
          <Abilities pokemon={pokemon} />
        </Box>
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await PokeService.getAll()

  const paths = data.results.map((item: any) => {
    return {
      params: {
        pokemon: item.name
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  const name = params.pokemon

  try {
    const data = await PokeService.getByName(name as string)

    return {
      props: { pokemon: data },
      revalidate: 60
    }
  } catch (error) {
    console.error((error as any).message)
  }
}

export default Pokemon
