import { Box, BoxProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

export const animateCard: Variants = {
  offscreen: {
    y: '224px',
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'keyframes',
      duration: 0.8,
      delayChildren: 0.7
    }
  }
}

export const MotionBox = motion<BoxProps>(Box)
