import { Button, Switch, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BsSun, BsMoon } from 'react-icons/bs'
import React from 'react'

type Props = {
  type?: boolean
}

export const SwitchTheme: React.FC<Props> = ({ type }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const light = colorMode === 'light'

  if (type) {
    return (
      <Button color={useColorModeValue('gray.900', 'white')} fontSize="xl" bg="transparent" onClick={toggleColorMode}>
        {light ? <BsSun className="icon" /> : <BsMoon className="icon" />}
      </Button>
    )
  }

  return (
    <Switch
      size="lg"
      marginX={4}
      colorScheme="red"
      aria-describedby="Switch theme"
      onChange={toggleColorMode}
      isChecked={!light}
    />
  )
}
