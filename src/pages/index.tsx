import { Center, Flex, Heading, Highlight, Spinner } from '@chakra-ui/react'
import { PokeService } from '../services/pokemon'
import { CardPokemon } from '../components/card'
import { TitleHead } from '../components/head'
import { GetStaticProps } from 'next'
import React from 'react'

const Home = ({ data }) => {
  const [pokemons, setPokemons] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        setPokemons(data.results)
      } catch (error: any) {
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    })()
  }, [data, loading])

  if (loading) {
    return (
      <>
        <TitleHead title="Loading | Pokedex" />
        <Center>
          <Spinner size="xl" color="red.500" />
        </Center>
      </>
    )
  }

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
        {pokemons.map((pokemon: any, key: React.Key) => (
          <CardPokemon key={key} {...pokemon} />
        ))}
      </Flex>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await PokeService.getAll(1000)

  data.results.forEach((item: any, index: number) => {
    item.id = index + 1
  })

  return {
    props: { data }
  }
}
