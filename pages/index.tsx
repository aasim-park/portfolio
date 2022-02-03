import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
      </Head>
      <body>
        <h1 className="justify-center font-semibold 3xl bg-blend-color">
          Hello world
        </h1>
      </body>
    </div>
  )
}
