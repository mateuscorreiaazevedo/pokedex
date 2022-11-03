import { Center, Container, Link, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <Container as="footer">
      <Center gap="1" as="span" fontSize="lg">
        Pokedex <Text>&copy;</Text> - 2022
      </Center>
      <Center as="span" gap={1} fontSize="xl" color="blue.500" fontWeight="normal">
        Powered by:{' '}
        <Link
          href="https://mateusdev.com.br"
          display="flex"
          alignItems="center"
          target="_blank"
          fontWeight="bold"
          transition="400ms"
          _hover={{
            textDecoration: 'none',
            letterSpacing: 2
          }}
          color="red.500"
        >
          mca &bull; dev
        </Link>
      </Center>
    </Container>
  )
}
