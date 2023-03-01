import Head from 'next/head'
import Link from 'next/link'
import { client } from 'sanity'
import { Inter } from 'next/font/google'



const inter = Inter({ weight: 'variable',subsets: ['latin'] })

type Essay = {
  slug: any,
  headline: string,
  essay: any,
}

export default function Essay({headline}: any) {

  return (
    <>
      <Head>
        <title>Ray Elder</title>
        <meta name="description" content="Ray Elder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h2 className={inter.className} style={{margin: "0", padding: "0 0 0 .125rem", fontSize:"1.125rem", fontWeight: "500"}}><Link href="/">Ray Elder</Link></h2>
      <h1 className={inter.className} style={{margin: "0", padding: "0 0 0 .125rem", fontSize:"1.125rem", fontWeight: "500"}}>{headline}</h1>
    </>
  )
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {

  const paths = await client.fetch(
    `*[_type == "essay" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context:any) {
  const { slug = "" } = context.params;
  const essay = await client.fetch(
    `
  *[_type == "essay" && slug.current == $slug][0]
`,
    { slug }
  );
  console.log(essay);
  
  return {
    // Passed to the page component as props
    props: { headline: essay.headline },
  }
}

/*
export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "essay" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const essay = await client.fetch(
    `
  *[_type == "essay" && slug.current == $slug][0]
`,
    { slug }
  );
  // console.log(`Essay: \n ${essay}`);
  return {
    props: {
      essay,
    },
  };
}
*/