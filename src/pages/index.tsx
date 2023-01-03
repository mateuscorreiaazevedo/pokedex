import { Center, Flex, Spinner, useToast } from '@chakra-ui/react'
import { MotionBox } from '../components/card/animation'
import { useInView } from 'react-intersection-observer'
import { TitleHome } from '../components/title-home'
import { PokeService } from '../services/pokemon'
import { CardPokemon } from '../components/card'
import { TitleHead } from '../components/head'
import { GetStaticProps } from 'next'
import React from 'react'

const Home = ({ pokemons:data }) => {
  const [pokemons, setPokemons] = React.useState(data)
  const [loading, setLoading] = React.useState(false)
  const [offset, setOffset] = React.useState(100)
  const {ref, inView} = useInView({ threshold: 0 })
  const toast = useToast()

  const handleChangeOffset = async () => {
    setLoading(true)
    try {
      const response = await PokeService.getAll({offset})
      setOffset(offset + 100)
      response.results.forEach((item: any, i: number)=> {
        item.id = (i + 1) + offset
      })
      setPokemons([...pokemons, ...response.results])
    } catch (error) {
      toast({
        title: error.message,
        status: 'error',
        isClosable: true
      })
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if(inView) {
      handleChangeOffset()
    }
  }, [loading, inView])

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
      {loading && (
        <Center>
          <Spinner />
        </Center>
      )}
      <div ref={ref} />
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
