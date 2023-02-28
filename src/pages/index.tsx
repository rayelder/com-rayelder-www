import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ weight: 'variable',subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ray Elder</title>
        <meta name="description" content="Ray Elder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <h1 className={inter.className} style={{margin: "0", padding: "0 0 0 .125rem", fontSize:"1.125rem", fontWeight: "500"}}>Ray Elder <span style={{paddingLeft: "0.5rem", fontWeight: "200"}}>Creative Technologist</span></h1>
    </>
  )
}
