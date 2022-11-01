import { theme, Theme } from '@chakra-ui/react'

export const myTheme: Theme = {
  ...theme,
  styles: {
    global: (props) => ({
      'body, html': {
        background: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900'
      }
    })
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    mono: 'Inter, system-ui, sans-serif'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700
  },
  fontSizes: {
    ...theme.fontSizes,
    '2xl': '54px'
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      '50': '#F4FBFB'
    },
    blue: {
      ...theme.colors.blue,
      '700': '#5C5E7D'
    }
  }
}
