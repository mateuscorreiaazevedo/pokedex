import { Center, Container, Flex, Link, Spacer, Text } from '@chakra-ui/react'
import { SwitchTheme } from '../switch-theme'
import React from 'react'

export const Footer = () => {
  return (
    <Flex as="footer" align={'center'} justifyContent="center" h={60}>
      <Container w="full" mx={5} maxW="1200px">
        <Flex align={'center'} justifyContent={'space-between'} fontSize="2xl">
          <Center as="span" fontWeight="bold">
            Pokedex{' '}
            <Text m={2} fontWeight="bold" color={'blue.400'}>
              &copy;
            </Text>{' '}
            - 2022
          </Center>
          <Spacer />
          <Text>
            Powered by:
            <Link
              href="https://mateusdev.com.br"
              target="_blank"
              marginLeft={2}
              transition="all 600ms ease"
              _hover={{
                textDecoration: 'none',
                letterSpacing: 1
              }}
            >
              mateusdev
            </Link>
          </Text>
          <SwitchTheme />
        </Flex>
      </Container>
    </Flex>
  )
}
