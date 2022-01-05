export default function Homepage() {
  return (
    <div className='h-screen flex justify-around items-center'>
      <div className='flex items-center gap-10'>
        <div className='font-bold'>
          <p className='text-4xl'>
            Flamex
          </p>
          <p className='text-gray-500'>
            Consequat irure ut in ex qui adipisicing officia ullamco fugiat consequat anim occaecat amet.
          </p>
        </div>
        <div className='flex justify-start w-1/2'>
          <img src='https://media.flamex.dev/me_pfp.png' alt='Profile Picture' className='w-52 rounded-lg' />
        </div>
      </div>
    </div>
  )
}