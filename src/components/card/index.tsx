import { Center, Heading, Skeleton, Spinner, Stack, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IdCard } from '../id-card'

export const CardPokemon = (props: any) => {
  const { name, id } = props
  const { colorMode } = useColorMode()
  const bgColorPoke = colorMode === 'light' ? 'teal.100' : 'gray.800'

  return (
    <Link href={`/pokemon/${name}`}>
      <Stack
        cursor="pointer"
        bg={bgColorPoke}
        h="56"
        w="44"
        p="3"
        position="relative"
        borderRadius="xl"
        boxShadow="dark-lg"
        transition="all 300ms linear"
        zIndex="base"
        _hover={{
          boxShadow: '2xl',
          transform: 'scale(1.1)'
        }}
      >
        <IdCard id={id} rest={{ minW: 8 }} />

        <Center>
          <Image
            loading="lazy"
            width="144"
            height="144"
            src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
            alt={name}
          />
        </Center>
        <Heading mb="2" textTransform="capitalize" fontSize="2xl" color="red.500" w="full" textAlign="center">
          {name}
        </Heading>
      </Stack>
    </Link>
  )
}
