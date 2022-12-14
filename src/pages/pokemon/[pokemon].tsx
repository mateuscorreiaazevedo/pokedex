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
import { Stats } from '../../components/stats'
import { maskIdImage } from '../../utils/mask-id'

const Pokemon = ({ pokemon }) => {
  const bgColorPoke = useColorModeValue('teal.100', 'gray.800')
  const router = useRouter()

  if (router.isFallback) {
    return <LoadingFallback />
  }

  return (
    <React.Suspense fallback={<LoadingFallback />}>
      <TitleHead title={pokemon?.name ? `${pokemon.name} | Pokédex` : 'Carregando...'} />
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
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${maskIdImage(pokemon.id)}.png`}
            width="1000"
            height="1000"
            alt={pokemon?.name || 'Pokemon'}
          />
        </Center>
        <Box textAlign="center">
          <Heading fontSize={{ md: '4xl', base: '2xl' }} textTransform="capitalize" color="red.500">
            {pokemon.name}
          </Heading>
          <Types pokemon={pokemon} />
          <Abilities pokemon={pokemon} />
          <Box fontSize={{ md: 'xl' }} fontWeight="medium" textAlign="center">
            Height
            <Center bg="blue.700" color="white" borderRadius="md" m="1" px="2" p="1" w="28" mx="auto">
              {pokemon.height}
            </Center>
          </Box>
          <Stats pokemon={pokemon} />
        </Box>
      </Flex>
    </React.Suspense>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await PokeService.getAll({})

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

  const data = await PokeService.getByName(name as string)

  return {
    props: { pokemon: data },
    revalidate: 60
  }
}

export default Pokemon
