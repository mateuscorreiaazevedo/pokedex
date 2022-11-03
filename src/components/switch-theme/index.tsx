import { Button, css, Switch, Tooltip, useColorMode } from '@chakra-ui/react'
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
      <Tooltip label="Switch theme" bg="teal.100" color="gray.900" hasArrow>
        <Button color="white" fontSize="xl" bg="blue.700" _hover={{ bg: 'blue.800' }} onClick={toggleColorMode}>
          {light ? <BsSun className="icon" /> : <BsMoon className="icon" />}
        </Button>
      </Tooltip>
    )
  }

  return (
    <Switch
      size="lg"
      marginX={4}
      colorScheme="blue.700"
      aria-describedby="Switch theme"
      onChange={toggleColorMode}
      isChecked={!light}
    />
  )
}
