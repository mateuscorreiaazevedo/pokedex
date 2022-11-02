import { Center, Flex, Image, Spacer, keyframes } from '@chakra-ui/react'
import { transparentize } from 'polished'
import Link from 'next/link'
import React from 'react'
import { NavLink } from './nav-link'

export const Header = () => {
  const animation = keyframes`
    5%, 25% {
      transform: rotate(30deg);
    }
    10%, 20%, 28% {
      transform: rotate(0);
    }
    18% {
      transform: rotate(-30deg);
    }
  `

  return (
    <Center as="header" h="60" marginTop="3" position="fixed" w="full">
      <Flex
        backdropFilter="auto"
        backdropBlur="md"
        as="nav"
        w="full"
        py="2"
        px="4"
        maxW="1200px"
        bgColor="whiteAlpha.500"
        boxShadow="xl"
        h="full"
        borderRadius="xl"
      >
        <Link href="/">
          <Image
            src="./assets/pokeball.png"
            h="full"
            _hover={{
              animation: `${animation} 1s ease-out infinite`
            }}
          />
        </Link>
        <Spacer />
        <Center gap="3">
          <NavLink link="/" title="Contact" />
          <NavLink link="/" title="About" />
        </Center>
      </Flex>
    </Center>
  )
}
