import { Box, Center, Flex, HStack, Stack, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

type StatsProps = {
  base_stat: number
  effort: 0
  stat: { name: string }
}

type Props = {
  pokemon: {
    stats: StatsProps[]
  }
}

export const Stats: React.FC<Props> = ({ pokemon }) => {
  return (
    <>
      <Box fontSize={{ md: 'xl' }} fontWeight="medium" as="p">
        Stats
      </Box>
      <Flex w="full" px={{ md: 0, base: 10 }} gap={1} align="flex-end" flexDirection="column">
        {pokemon.stats.map((stat: StatsProps, key: React.Key) => (
          <Center key={key}>
            <Box fontSize={{ md: 'lg' }} fontWeight="medium" overflowX="hidden" whiteSpace="nowrap">
              {stat.stat.name}
            </Box>
            <Box
              ml={4}
              maxW="200px"
              w={`${stat.base_stat}px`}
              color="white"
              fontWeight="bold"
              bg="red.500"
              borderRadius="md"
            >
              {stat.base_stat}
            </Box>
          </Center>
        ))}
      </Flex>
    </>
  )
}
