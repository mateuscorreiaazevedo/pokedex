import { Center, Flex, Heading, Highlight, VStack } from '@chakra-ui/react'
import { PokeService } from '../services/pokemon'
import { CardPokemon } from '../components/card'
import { TitleHead } from '../components/head'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { SearchBar } from '../components/searchbar'

const Home = ({ pokemons }) => {
  const router = useRouter()

  return (
    <>
      <TitleHead title="Home | Pokedex" />
      <Center mt="4">
        <Heading as="h1" cursor="pointer" fontSize="5xl" color="blue.700">
          <Highlight
            query="dex"
            styles={{
              color: 'red.500',
              background: 'white',
              borderRadius: 'md',
              pr: '4'
            }}
          >
            Pokedex
          </Highlight>
        </Heading>
      </Center>
      <Center mt="4" as="p" color="orange.500" fontWeight="medium">
        Clique no card para mais detalhes*
      </Center>
      <Flex my="14" justify="center" wrap="wrap" gap="10" maxW="1200px">
        {pokemons?.map((pokemon: any, key: React.Key) => (
          <CardPokemon key={key} {...pokemon} />
        ))}
      </Flex>
      <VStack>
        <Center fontSize={{ md: 'xl', base: 'md' }} fontWeight="medium">
          Não encontrou o pokémon que queria? Escreva o seu nome no campo abaixo
        </Center>
        <SearchBar />
      </VStack>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await PokeService.getAll()

  data.results.forEach((item: any, index: number) => {
    item.id = index + 1
  })

  return {
    props: { pokemons: data.results },
    revalidate: 60
  }
}

export default Home
