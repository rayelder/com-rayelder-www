import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ray Elder: Creative Technologist</title>
        <meta name="description" content="Ray Elder: Creative Technologist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main><h1 className={inter.className}>Ray Elder</h1></main>
    </>
  )
}
