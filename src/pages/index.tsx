import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
// import { getEssays } from 'sanity'
import { client } from 'sanity'

const inter = Inter({ weight: 'variable',subsets: ['latin'] })

type Essay = {
  slug: any,
  headline: string,
}

type Essays = {
  essays: Essay[];
}

export default function Home({essays}: Essays) {

  // console.log(essays[0].slug);
  
  
  return (
    <>
      <Head>
        <title>Ray Elder</title>
        <meta name="description" content="Ray Elder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h2 className={inter.className}>
        <Link href="/">Ray Elder</Link>
      </h2>
      <ul className={inter.className} >
          {
          essays.map((essay,index) => (
            <li key={index}>
              <Link href={`essays/${essay.slug.current}`}>{essay.headline}</Link>
            </li>
          ))
          }
        </ul>
    </>
  )
}

export async function getStaticProps() {
  const essays = await client.fetch('*[_type == "essay"]')
  return {
    props: {
      essays,
    },
  }
}
