import { FC } from 'react'

const Services: FC = () => {
  return (
    <section className='px-5 detail-container mx-auto py-50 md:py-24 flex flex-col md:gap-24 gap-12'>
      <div className='flex flex-col text-center gap-3'>
        <h2 className='text-5xl md:text-7xl font-bold text-center'>Authentication & Grading Services</h2>
        <p className='max-w-3xl text-center text-gray-600 sm:text-xl mx-auto text-semibold'>
          GSA is the industry standard for authentication and grading. Find us wherever collectibles are admired and
          acquired, and submit yours today.
        </p>
      </div>
      <div className='grid grid-cols-3 max-md:flex max-md:flex-col max-md:items-center gap-20 md:gap-40'>
        <div className='flex flex-col max-w-500 h-120 rounded-2xl border border-dark-base-6 bg-white shadow-xl'>
          <div className='flex flex-col gap-4 items-center max-sm:flex-col max-sm:h-auto text-center p-8'>
            <h3 className='font-manrope text-2xl md:text-32 max-lg:text-24 font-bold leading-9 text-dark-base-1'>
              Submit Trading Cards
            </h3>
            <button className='flex cursor-pointer w-full rounded-lg bg-red-500 text-lg text-white hover:bg-red-600 transition px-6 py-3 justify-center items-center'>
              Start Now
            </button>
          </div>
          <div className='flex items-center justify-center'>
            <img src='/image-1.png' alt='image-1' />
          </div>
        </div>

        <div className='flex flex-col max-w-500 h-120 rounded-2xl border border-dark-base-6 bg-white shadow-xl'>
          <div className='flex flex-col gap-4 items-center max-sm:flex-col max-sm:h-auto text-center p-8'>
            <h3 className='font-manrope text-2xl md:text-32 max-lg:text-24 font-bold leading-9 text-dark-base-1'>
              Submit Autographs
            </h3>
            <button className='flex cursor-pointer w-full rounded-lg bg-red-500 text-lg text-white hover:bg-red-600 transition px-6 py-3 justify-center items-center'>
              Start Now
            </button>
          </div>
          <div className='flex items-center justify-center'>
            <img src='/image-2.png' alt='image-2' />
          </div>
        </div>

        <div className='flex flex-col max-w-500 h-120 rounded-2xl border border-dark-base-6 bg-white shadow-xl'>
          <div className='flex flex-col gap-4 items-center max-sm:flex-col max-sm:h-auto text-center p-8'>
            <h3 className='font-manrope text-2xl md:text-32 max-lg:text-24 font-bold leading-9 text-dark-base-1'>
              Join Collectors Club
            </h3>
            <button className='flex cursor-pointer w-full rounded-lg bg-red-500 text-lg text-white hover:bg-red-600 transition px-6 py-3 justify-center items-center'>
              Start Now
            </button>
          </div>
          <div className='flex items-center justify-center'>
            <img src='/image-3.png' alt='image-3' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
