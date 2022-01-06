import '../styles/globals.css'
import '../styles/tailwind.css'
import Head from 'next/head'

export default function render({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Flamex - Passionate self-taught software engineer from Germany
        </title>
        <link rel="icon" href='https://media.flamex.dev/me_pfp_upscaled.png' />
      </Head>
      <div className='w-screen min-h-screen text-white select-none md:bg-gradient-to-tr bg-gradient-to-t from-black to-gray-800'>
        <Component {...pageProps} />
      </div>
      <footer className='absolute bottom-0 left-0 w-screen bg-white bg-opacity-0 py-2 px-5 md:text-left text-center text-white text-opacity-25'>
        &copy; 2022 - <a href="https://github.com/flamexdev/flamex.dev/blob/main/LICENSE" className='underline transition duration-100 ease-in-out hover:text-opacity-40 text-opacity-25 text-white'>Flamex</a>
      </footer>
    </>
  )
}