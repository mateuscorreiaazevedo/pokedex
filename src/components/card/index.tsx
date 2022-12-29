import { Center, Heading, Skeleton, Spinner, Stack, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { maskIdImage } from '../../utils/mask-id'
import { IdCard } from '../id-card'
import { animateCard, MotionBox } from './animation'

export const CardPokemon = (props: any) => {
  const { name, id } = props
  const { colorMode } = useColorMode()
  const bgColorPoke = colorMode === 'light' ? 'teal.100' : 'gray.800'

  return (
    <MotionBox variants={animateCard} transformOrigin="10% 60%">
      <Link href={`/pokemon/${name}`}>
        <Stack
          cursor="pointer"
          bg={bgColorPoke}
          h="56"
          w="44"
          p="3"
          position="relative"
          borderRadius="xl"
          boxShadow="2xl"
          transition="all 300ms linear"
          zIndex="base"
          _hover={{
            boxShadow: 'lg',
            transform: 'scale(1.2)'
          }}
        >
          <IdCard id={id} rest={{ minW: 8 }} />

          <Center>
            <Image
              loading="lazy"
              width="144"
              height="144"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${maskIdImage(id)}.png`}
              alt={name}
            />
          </Center>
          <Heading mb="2" textTransform="capitalize" fontSize="2xl" color="red.500" w="full" textAlign="center">
            {name}
          </Heading>
        </Stack>
      </Link>
    </MotionBox>
  )
}
