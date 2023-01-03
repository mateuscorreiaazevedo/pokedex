import { Button, Center, Flex, Spinner, useToast } from '@chakra-ui/react'
import { MotionBox } from '../components/card/animation'
import { TitleHome } from '../components/title-home'
import { PokeService } from '../services/pokemon'
import { CardPokemon } from '../components/card'
import { TitleHead } from '../components/head'
import { GetStaticProps } from 'next'
import React from 'react'

const Home = ({ pokemons: data }) => {
  const [pokemons, setPokemons] = React.useState(data)
  const [loading, setLoading] = React.useState(false)
  const [showBtn, setShowBtn] = React.useState(true)
  const [offset, setOffset] = React.useState(100)
  const toast = useToast()

  const handleChangePage = async () => {
    setOffset(offset + 100)
    setLoading(true)
    try {
      const response = await PokeService.getAll({ offset })
      if(!response.results) {
        setShowBtn(false)
      }
      response.results.forEach((item: any, index: number) => {
        item.id = index + (offset + 1)
      })
      setPokemons([...pokemons, ...response.results])
    } catch (error) {
      toast({
        title: (error as any).message,
        status: 'error',
        isClosable: true
      })
    } finally {
      setLoading(false)
    }
  }


  return (
    <>
      <TitleHead title="Home | Pokédex" />
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
      <Center pb={8}>
      {showBtn && (
        <Button colorScheme='blue' onClick={handleChangePage} isDisabled={loading}>
          {loading ? <><Spinner/></>: <>Carregar mais...</>}
        </Button>
      )}
      </Center>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await PokeService.getAll({})

  data.results.forEach((item: any, index: number) => {
    item.id = index + 1
  })

  return {
    props: { pokemons: data.results },
    revalidate: 60
  }
}

export default Home
