import { Center, Flex, Spacer, keyframes, Tooltip, Container } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SearchBar } from '../searchbar'
import { SwitchTheme } from '../switch-theme'
import { NavLink } from './nav-link'

export const animationPokeball = keyframes`
  5%, 25% {transform: rotate(30deg)}
  10%, 20%, 28% {transform: rotate(0)}
  18% {transform: rotate(-30deg)}
`
export const Header = () => {
  return (
    <Center as="header" h="60" marginTop="3" position="fixed" w="full" zIndex="docked">
      <Flex
        backdropFilter="auto"
        backdropBlur="md"
        w="full"
        mx="8"
        py="2"
        px="4"
        maxW="1200px"
        bgColor="whiteAlpha.500"
        boxShadow="xl"
        h="full"
        borderRadius="2xl"
        justify="space-between"
      >
        <Link href="/">
          <Tooltip label="To home" bg="blue.700" color="white" borderRadius="md" hasArrow>
            <Container _hover={{ animation: `${animationPokeball} 1s ease-out infinite` }}>
              <Image src="/assets/pokeball.png" width={46} height={46} alt="pokeball" />
            </Container>
          </Tooltip>
        </Link>
        <SearchBar />
        <Center as="nav" gap="3">
          <NavLink link="/about" title="About" />
          <SwitchTheme />
        </Center>
      </Flex>
    </Center>
  )
}
