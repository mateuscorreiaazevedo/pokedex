import { Center, CenterProps } from '@chakra-ui/react'
import React from 'react'

type Props = {
  rest: CenterProps
  id: number
}

export const IdCard: React.FC<Props> = ({ id, rest }) => {
  return (
    <Center
      left="0"
      borderRightRadius="md"
      position="absolute"
      color="white"
      fontWeight="bold"
      w="auto"
      bg="red.500"
      {...rest}
    >
      {id}
    </Center>
  )
}
