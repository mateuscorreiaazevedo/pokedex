import { Input, InputGroup, InputLeftElement, useColorModeValue, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

export const SearchBar = () => {
  const colorPlaceholder = useColorModeValue('gray.500', 'white')
  const [search, setSearch] = React.useState('')
  const pokeName = search.toLowerCase()
  const router = useRouter()
  const toast = useToast()

  const handlePokemon = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const enter = e.key === 'Enter'
    if (enter && search.length) {
      router.push(`/pokemon/${pokeName}`)
      setSearch('')
    } else if (enter && !search.length) {
      toast({
        status: 'error',
        title: 'Por favor, preencha o campo de pesquisa',
        isClosable: true,
        duration: 1000,
        position: 'bottom-left'
      })
    }
  }

  return (
    <>
      <InputGroup width={{ md: '90%', base: '80' }}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          mb="5"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar Pokémons"
          bg="whiteAlpha.600"
          border="none"
          onKeyDown={(e) => handlePokemon(e)}
          value={search}
          _placeholder={{ color: colorPlaceholder }}
        />
      </InputGroup>
    </>
  )
}
