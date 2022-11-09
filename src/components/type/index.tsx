import { Box, Center } from '@chakra-ui/react'
import React from 'react'

export const Types = ({ pokemon }) => {
  const switchBg = (type: string) => {
    let color: string
    switch (type) {
      case 'grass':
        return (color = 'green.500')
      case 'poison':
        return (color = 'purple.600')
      case 'fire':
        return (color = 'red.500')
      case 'electric':
        return (color = 'yellow.400')
      case 'water':
        return (color = 'blue.300')
      case 'fairy':
        return (color = 'pink.400')
      case 'ground':
        return (color = 'brown')
      case 'psychic':
        return (color = 'teal.400')
      case 'dragon':
        return (color = 'orange.600')
      case 'ice':
        return (color = 'cyan.400')
      case 'dark':
        return (color = 'gray.700')
      case 'fighting':
        return (color = 'gold')
      case 'bug':
        return (color = 'green.700')
      case 'flying':
        return (color = 'teal.600')
      default:
        return (color = 'blue.700')
    }
  }

  return (
    <Center>
      <Box as="span" fontSize={{ md: 'xl' }} fontWeight="medium" textAlign="center">
        Types
        {pokemon.types?.map((item: any, key: React.Key) => {
          let bgColor: string = switchBg(item.type.name)

          return (
            <Center
              key={key}
              fontWeight="bold"
              textTransform="capitalize"
              bg={bgColor}
              m="1"
              borderRadius="md"
              color="white"
              p="1"
              px="2"
            >
              {item.type.name}
            </Center>
          )
        })}
      </Box>
    </Center>
  )
}
