import { Box, Image } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React from 'react'
import { PokeService } from '../../services/pokemon'

const Pokemon = ({ data }) => {
  const [pokemon, setPokemon] = React.useState(data)

  React.useEffect(() => {
    setPokemon(data)
  }, [data])

  return (
    <Box>
      <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} />
    </Box>
  )
}

export default Pokemon

export const getStaticProps: GetStaticProps = async () => {
  const data = await PokeService.getByName('pikachu')
  data.results
  return {
    props: {
      data
    }
  }
}
