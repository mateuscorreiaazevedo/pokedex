import { Link as ChakraLink, useColorMode, Container } from '@chakra-ui/react'
import Image from 'next/image'
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
            div.container-img {
              transition: 400ms;
              transform: scale(1);
            }
          }
        `}
      >
        <Container
          sx={{
            '@media (max-width: 425px)': {
              display: 'none'
            }
          }}
          className="container-img"
          transform="scale(0)"
        >
          <Image src="/assets/pokeball.png" alt="pokeball" width={24} height={24} />
        </Container>
        {title}
      </ChakraLink>
    </Link>
  )
}
