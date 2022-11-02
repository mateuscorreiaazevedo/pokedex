import Head from 'next/head'
import React from 'react'

type Props = {
  title: string
}

export const TitleHead: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
