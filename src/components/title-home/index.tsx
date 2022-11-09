import { Center, Heading, Box, BoxProps } from '@chakra-ui/react'
import { HighlightComponent } from '../highlight'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const MotionBox = motion<BoxProps>(Box)

const animateBox: Variants = {
  hidden: {
    scale: 1,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.4
    }
  }
}
const animateChildren: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

export const TitleHome = () => {
  return (
    <MotionBox initial="hidden" animate="visible" variants={animateBox}>
      <MotionBox variants={animateChildren}>
        <Center mt="4">
          <Heading as="h1" fontSize="5xl" color="blue.700">
            <HighlightComponent query="dex" title="Pokédex" />
          </Heading>
        </Center>
      </MotionBox>
      <MotionBox variants={animateChildren}>
        <Center mt="4" as="p" color="orange.500" fontWeight="medium">
          Clique no card para mais detalhes*
        </Center>
      </MotionBox>
    </MotionBox>
  )
}
