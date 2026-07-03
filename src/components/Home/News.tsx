import { FC } from 'react'
import { newsData } from './Home.data'

const News: FC = () => {
  return (
    <section className='px-5 detail-container mx-auto py-24 flex flex-col gap-24'>
      <div className='flex flex-col gap-3 relative'>
        <h2 className='text-7xl font-bold'>News</h2>
        <p className='max-w-3xl text-gray-600 sm:text-xl'>Updates from Southentic HQ and select partners.</p>
        <button className='bg-gray-200 hover:bg-gray-300 transition px-4 py-[10px] absolute bottom-0 right-0 rounded-md text-sm font-semibold'>
          View All
        </button>
      </div>
      <div className='grid grid-cols-2 max-md:flex max-md:flex-col max-md:items-center max-md:gap-40 gap-10'>
        {newsData.map(item => (
          <div
            key={item.src}
            className='w-full flex flex-col gap-6 rounded-18 p-4 bg-white border shadow-xl rounded-xl hover:scale-105 transition'
          >
            <img src={item.src} alt={item.src} className='w-full rounded-xl h-400' />
            <div className='flex flex-col gap-2'>
              <h4 className='text-2xl font-semibold'>{item.title}</h4>
              <span className='text-black/50 text-base'>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default News
