import { MotionBox } from '../components/card/animation'
import { TitleHome } from '../components/title-home'
import { PokeService } from '../services/pokemon'
import { CardPokemon } from '../components/card'
import { Center, Flex } from '@chakra-ui/react'
import { TitleHead } from '../components/head'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import React from 'react'

const Home = ({ pokemons }) => {
  const router = useRouter()

  return (
    <>
      <TitleHead title="Home | Pokedex" />
      <TitleHome />
      <Flex py="10" justify="space-around" wrap="wrap">
        {pokemons?.map((pokemon: any, key: React.Key) => (
          <MotionBox
            overflow="hidden"
            position="relative"
            py={14}
            px={8}
            key={key}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5, once: true }}
          >
            <CardPokemon {...pokemon} />
          </MotionBox>
        ))}
      </Flex>
      <Center textAlign="center" fontSize={{ md: 'xl', base: 'md' }} mb="4" fontWeight="medium">
        Não encontrou o pokémon que queria? Digite o nome do pokémon na barra de pesquisa!
      </Center>
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
