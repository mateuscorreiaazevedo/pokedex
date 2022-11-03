import { Button, Switch, useColorMode } from '@chakra-ui/react'
import { BsSun, BsMoon } from 'react-icons/bs'
import React from 'react'

type Props = {
  type?: boolean
}

export const SwitchTheme: React.FC<Props> = ({ type }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const light = colorMode === 'light'

  if (type) {
    return <Button onClick={toggleColorMode}>{light ? <BsSun /> : <BsMoon />}</Button>
  }

  return (
    <Switch
      marginX={4}
      colorScheme="blue.700"
      aria-describedby="Switch theme"
      onChange={toggleColorMode}
      isChecked={!light}
    />
  )
}
