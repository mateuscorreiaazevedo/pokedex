import {
  Box,
  Divider,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Heading,
  VStack,
  Link
} from '@chakra-ui/react'
import React from 'react'
import { GrGithub, GrInstagram, GrLinkedin } from 'react-icons/gr'
import { SwitchTheme } from '../../../switch-theme'
import { NavLink } from '../../nav-link'

export const DrawerMenu = () => {
  return (
    <DrawerContent bg="whiteAlpha.700" backdropFilter="auto" backdropBlur="sm" w="full">
      <DrawerCloseButton />
      <DrawerHeader>
        <Heading as="h1" textAlign="center">
          PokéDex
        </Heading>
      </DrawerHeader>
      <DrawerBody>
        <VStack>
          <NavLink link="/about" title="About" />
          <SwitchTheme type />
        </VStack>
        <Divider color="gray.100" my={2} />
        <VStack fontSize="xl" fontWeight="medium">
          <Link
            display="flex"
            gap="2"
            alignItems="center"
            href="https://github.com/mateuscorreiaazevedo"
            target="_blank"
          >
            <GrGithub /> Github
          </Link>
          <Link
            display="flex"
            gap="2"
            alignItems="center"
            href="https://linkedin.com/in/mateuscorreiaazevedo"
            target="_blank"
          >
            <GrLinkedin /> Linkedin
          </Link>
          <Link
            display="flex"
            gap="2"
            alignItems="center"
            href="https://instagram.com/mateuscorreiaazevedo"
            target="_blank"
          >
            <GrInstagram /> Instagram
          </Link>
        </VStack>
      </DrawerBody>
      <DrawerFooter>
        <Box>Pokédex &copy; 2022 - Mateus Correia Azevedo</Box>
      </DrawerFooter>
    </DrawerContent>
  )
}
