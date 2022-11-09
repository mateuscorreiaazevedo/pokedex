import { Highlight } from '@chakra-ui/react'
import React from 'react'

type Props = {
  query: string
  title: string
}

export const HighlightComponent: React.FC<Props> = ({ query, title }) => {
  return (
    <Highlight
      query={query}
      styles={{
        color: 'red.500',
        background: 'white',
        borderRadius: 'md',
        pr: '4'
      }}
    >
      {title}
    </Highlight>
  )
}
