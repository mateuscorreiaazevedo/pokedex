import { Box, Center, Flex, Skeleton, useColorMode } from '@chakra-ui/react'
import { TitleHead } from '../head'
import React from 'react'

export const LoadingFallback = () => {
  const { colorMode } = useColorMode()
  const bgColorPoke = colorMode === 'light' ? 'teal.100' : 'gray.800'

  return (
    <>
      <TitleHead title="Carregando... | Pokedex" />
      <Skeleton color={bgColorPoke} shadow="lg" my="20" h="600px" borderRadius="2xl" />
    </>
  )
}
