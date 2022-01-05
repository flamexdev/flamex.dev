import '../styles/globals.css'
import '../styles/tailwind.css'

export default function render({ Component, pageProps }) {
  return (
    <div className='w-screen min-h-screen bg-black text-white select-none'>
      <Component {...pageProps} />
    </div>
  )
}