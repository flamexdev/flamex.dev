const links = [
  {
    title: "Polywork",
    url: "https://poly.work/flamex"
  }, {
    title: "Twitter",
    url: "https://twitter.com/flamexdev"
  }, {
    title: "GitHub",
    url: "https://github.com/flamexdev"
  }
]

export default function Homepage() {
  return (
    <div className='h-screen flex justify-around items-center'>
      <div className='p-4 h-1/2'>
        <div className='flex items-center md:gap-10 gap-5 md:flex-row-reverse'>
          <div className='flex justify-start'>
            <img src='https://media.flamex.dev/me_pfp_upscaled.png' alt='Profile Picture' className='md:w-52 w-28 rounded-lg' />
          </div>
          <div className='font-bold md:w-min w-2/3'>
            <p className='md:text-4xl text-3xl animate-bounce'>
              Flamex
            </p>
            <p className='text-gray-500 font-mono md:whitespace-nowrap leading-4'>
              Passionate self-taught software engineer from Germany
            </p>
            <p className='md:flex items-center gap-2 mt-5 hidden'>
              {links.map(e => (
                <a href={e.url} className='px-4 py-1 rounded-sm bg-indigo-500 transition duration-150 ease-in-out hover:bg-indigo-600'>
                  {e.title}
                </a>
              ))}
            </p>
          </div>
        </div>
        <div className='md:hidden flex items-center gap-2 mt-8 font-bold'>
          {links.map(e => (
            <a href={e.url} className='px-3 py-1 rounded-sm bg-indigo-500 transition duration-150 ease-in-out hover:bg-indigo-600 text-sm'>
              {e.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}