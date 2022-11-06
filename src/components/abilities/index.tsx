import { Box, Center } from '@chakra-ui/react'
import React from 'react'

export const Abilities = ({ pokemon }) => {
  return (
    <Center mt="1">
      <Box textAlign="center" as="span" fontSize="xl" fontWeight="medium">
        Abilities
        {pokemon.abilities?.map((item: any, key: React.Key) => (
          <Center
            key={key}
            fontWeight="bold"
            textTransform="capitalize"
            bg="blue.700"
            m="1"
            borderRadius="md"
            color="white"
            p="1"
            px="2"
          >
            {item.ability.name}
          </Center>
        ))}
      </Box>
    </Center>
  )
}
