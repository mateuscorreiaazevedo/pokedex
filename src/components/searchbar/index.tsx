import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

export const SearchBar = () => {
  return (
    <InputGroup
      w="xl"
      sx={{
        '@media (max-width: 500px)': {
          display: 'none'
        }
      }}
    >
      <InputLeftElement children={<BsSearch />} />
      <Input variant="filled" bg="blackAlpha.300" placeholder="Pesquisar pokemóns" borderRadius="lg" />
    </InputGroup>
  )
}
