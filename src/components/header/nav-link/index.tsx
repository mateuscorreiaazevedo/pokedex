import { Box, Link as A, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  link: string
}

export const NavLink: React.FC<Props> = ({ link, title }) => {
  const { colorMode } = useColorMode()

  const bgLine = colorMode === 'light' ? 'gray.900' : 'white'

  return (
    <Link href={link}>
      <A
        as="span"
        fontSize="xl"
        fontWeight="medium"
        position="relative"
        css={`
          &:hover {
            text-decoration: none;
            .line {
              transition: width 200ms linear;
              width: 100%;
            }
          }
        `}
      >
        {title}
        <Box className="line" w="0" h="1" bg={bgLine} borderRadius="full" position="absolute" right="0" />
      </A>
    </Link>
  )
}
