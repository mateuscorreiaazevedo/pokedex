import { Input, InputGroup, InputLeftElement, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

export const SearchBar = () => {
  const [search, setSearch] = React.useState('')
  const router = useRouter()
  const toast = useToast()

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && search.length) {
      router.push(`/pokemon/${search.toLowerCase()}`)
      setSearch('')
    } else if (e.key === 'Enter' && !search.length) {
      toast({
        status: 'error',
        position: 'top',
        isClosable: true,
        duration: 800,
        title: 'Por favor, insira o nome de um Pokémon no campo de busca.'
      })
    }
  }

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
      <Input
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
        variant="filled"
        bg="blackAlpha.300"
        placeholder="Pesquisar Pokémons"
        borderRadius="lg"
      />
    </InputGroup>
  )
}
