import { Image, Link as ChakraLink, useColorMode } from '@chakra-ui/react'
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
      <ChakraLink
        as="span"
        fontSize="xl"
        fontWeight="medium"
        display="flex"
        alignItems="center"
        justifyContent="center"
        css={`
          &:hover {
            text-decoration: none;
            img {
              transition: 400ms;
              transform: scale(1);
            }
          }
        `}
      >
        <Image mr="2" src="./assets/pokeball.png" w="6" transform="scale(0)" />
        {title}
      </ChakraLink>
    </Link>
  )
}
