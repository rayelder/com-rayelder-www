import Head from 'next/head'
import Link from 'next/link'
import { client } from 'sanity'
import { Inter } from 'next/font/google'

const inter = Inter({ weight: 'variable',subsets: ['latin'] })

type Essay = {
  slug: any,
  headline: string,
}

export default function Essay({headline, description}: any) {

  return (
    <>
      <Head>
        <title>Ray Elder</title>
        <meta name="description" content="Ray Elder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h2 className={inter.className}><Link href="/">Ray Elder</Link></h2>
      <h1 className={inter.className}>{headline}</h1>
      <p className={inter.className}>{description}</p>
    </>
  )
}

export async function getStaticPaths() {

  const paths = await client.fetch(
    `*[_type == "essay" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context:any) {
  const { slug = "" } = context.params;
  const essay = await client.fetch(
    `
  *[_type == "essay" && slug.current == $slug][0]
`,
    { slug }
  );
  return {
    props: { headline: essay.headline, description: essay.description },
  }
}