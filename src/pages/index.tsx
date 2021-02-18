import React from 'react'
import Head from 'next/head'
import Main from 'components/Main'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Main />
      </main>
    </div>
  )
}

export default Home
