import { SwitchTheme } from '../../switch-theme'
import {
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Link,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { NavLink } from '../nav-link'
import { GrGithub, GrInstagram, GrLinkedin, GrMenu } from 'react-icons/gr'
import React from 'react'
import { DrawerMenu } from './drawer'

export const Nav = () => {
  const mobileRef = React.useRef()
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <Center display={{ md: 'flex', base: 'none' }} as="nav" gap="3">
        <NavLink link="/about" title="About" />
        <SwitchTheme />
      </Center>
      <Center ml="px" display={{ md: 'none', base: 'flex' }}>
        <Button ref={mobileRef} fontSize="2xl" onClick={onOpen}>
          <GrMenu />
        </Button>
      </Center>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={mobileRef}>
        <DrawerMenu />
      </Drawer>
    </>
  )
}
