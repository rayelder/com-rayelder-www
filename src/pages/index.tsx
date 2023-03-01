import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Ray Elder</title>
        <meta name="description" content="Ray Elder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="temporary">
      <h1>I’m working on something different</h1>
      <div className="rules">
        <div className="rule"></div>
        <div className="rule"></div>
        <div className="rule"></div>
        <div className="rule"></div>
      </div>
      <p>Ray Elder is a creative technologist living in Southern California.</p>
    </div>
    </>
  )
}