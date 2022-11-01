import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { ThemeProvider as EmotionTheme } from '@emotion/react'
import { ColorModeScript } from '@chakra-ui/color-mode'
import React from 'react'
import { myTheme } from '../styles/theme'

export const ThemeProvider = ({ children }) => {
  return (
    <ChakraProvider theme={myTheme}>
      <EmotionTheme theme={myTheme}>
        <ColorModeScript initialColorMode="dark" />
        <CSSReset />
        {children}
      </EmotionTheme>
    </ChakraProvider>
  )
}
