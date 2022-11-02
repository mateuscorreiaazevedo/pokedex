import { Container } from '@chakra-ui/react'
import { Header } from '../header'
import { Footer } from '../footer'
import React from 'react'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container as="main" minH="92vh" maxW="1200px" w="full" pt="20">
        {children}
      </Container>
      <Footer />
    </>
  )
}
