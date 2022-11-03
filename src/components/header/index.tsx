import { Center, Flex, Image, Spacer, keyframes } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { SwitchTheme } from '../switch-theme'
import { NavLink } from './nav-link'

export const animationPokeball = keyframes`
  5%, 25% {transform: rotate(30deg)}
  10%, 20%, 28% {transform: rotate(0)}
  18% {transform: rotate(-30deg)}
`
export const Header = () => {
  return (
    <Center as="header" h="60" marginTop="3" position="fixed" w="full">
      <Flex
        backdropFilter="auto"
        backdropBlur="md"
        w="full"
        py="2"
        px="4"
        maxW="1200px"
        bgColor="whiteAlpha.500"
        boxShadow="xl"
        h="full"
        borderRadius="2xl"
      >
        <Link href="/">
          <Image
            src="./assets/pokeball.png"
            h="full"
            _hover={{
              animation: `${animationPokeball} 1s ease-out infinite`
            }}
          />
        </Link>
        <Spacer />
        <Center as="nav" gap="3">
          <NavLink link="/about" title="About" />
          <SwitchTheme />
        </Center>
      </Flex>
    </Center>
  )
}
