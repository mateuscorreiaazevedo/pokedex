import { Center, Spinner, theme } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { transparentize } from 'polished'
import React from 'react'

export function Loading() {
  const [isLoading, setIsLoading] = React.useState(false)
  const blueAlpha = transparentize(0.6, theme.colors.blue[700])
  const router = useRouter()

  React.useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && setIsLoading(true)
    const handleCompete = (url: string) => url === router.asPath && setTimeout(() => setIsLoading(false), 200)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleCompete)
    router.events.on('routeChangeError', handleCompete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleCompete)
      router.events.off('routeChangeError', handleCompete)
    }
  })

  return (
    isLoading && (
      <Center
        h="100vh"
        position="fixed"
        inset={0}
        bg={blueAlpha}
        zIndex="dropdown"
        backdropFilter="auto"
        backdropBlur="sm"
      >
        <Spinner size="xl" thickness="4px" />
      </Center>
    )
  )
}
