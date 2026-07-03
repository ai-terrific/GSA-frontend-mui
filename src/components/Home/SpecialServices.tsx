import { FC } from 'react'

const SpecialServices: FC = () => {
  return (
    <section className='px-5 detail-container mx-auto py-24 flex flex-col gap-50 md:gap-24'>
      <div className='flex flex-col gap-3'>
        <span className='text-center font-manrope w-36 text-xl font-semibold leading-30 text-red-500 px-3 bg-red-500 bg-opacity-20 py-2 flex items-center gap-10 rounded mb-3'>
          New Feature
        </span>
        <h2 className='text-5xl md:text-7xl font-bold'>Specialized Grading Services</h2>
        <p className='max-w-3xl text-gray-600 text-semibold sm:text-xl'>
          Hobby love is won with each closing auction and final offer. Enlist free real-time pricing data to time the
          market and curate in-the-moment.
        </p>
      </div>
      <div className='grid grid-cols-2 max-md:flex max-md:flex-col max-md:items-center max-md:gap-40 gap-10'>
        <div className='w-full flex flex-col items-center rounded-18 bg-white border shadow-xl rounded-xl'>
          <div className='w-full flex justify-center pt-10 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-[#3CAADD] via-[#8CD6F9] to-[#3CAADD] rounded-xl'>
            <img src='/grading-1.png' alt='grading-1' />
          </div>
          <div className='flex flex-col p-8 gap-6'>
            <h3 className='text-32 font-bold'>Sports Cards and Pokémon / TCG Grading</h3>
            <p className='text-xl text-gray-500 text-semibold'>
              Expert graders familiar with the nuances and specifics of each category, ensuring your prized collectibles
              are graded with an understanding of their unique features
            </p>
            <button className='flex cursor-pointer w-full rounded-lg bg-red-500 text-lg text-white hover:bg-red-600 transition px-6 py-3 justify-center items-center'>
              Start Now
            </button>
          </div>
        </div>
        <div className='w-full flex flex-col items-center rounded-18 bg-white border shadow-xl rounded-xl'>
          <div className='w-full flex justify-center pt-10 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-[#704E5D] via-[#A78594] to-[#704E5D] rounded-xl'>
            <img src='/grading-2.png' alt='grading-2' />
          </div>
          <div className='flex flex-col p-8 gap-6'>
            <h3 className='text-32 font-bold'>Sports Cards and Pokémon / TCG Grading</h3>
            <p className='text-xl text-gray-500 text-semibold'>
              Expert graders familiar with the nuances and specifics of each category, ensuring your prized collectibles
              are graded with an understanding of their unique features
            </p>
            <button className='flex cursor-pointer w-full rounded-lg bg-red-500 text-lg text-white hover:bg-red-600 transition px-6 py-3 justify-center items-center'>
              Start Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialServices
