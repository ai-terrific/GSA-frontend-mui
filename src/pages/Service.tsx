import { FC } from 'react'

const Service: FC = () => {
  return (
    <div className='detail-container mx-auto p-12'>
      <div className='flex flex-col gap-8 justify-center min-h-screen'>
        <div className='flex flex-col items-center gap-4'>
          <h3 className='text-3xl font-bold'>Grading Service Program</h3>
          <p className='text-gray-600'>Select the service you want to take</p>
        </div>
        <div className='grid grid-cols-3 max-md:flex max-lg:flex-col gap-4'>
          <div className='p-8 flex flex-col gap-8 border shadow-xl rounded-2xl focus:border-red-400 '>
            <div className='flex justify-space-between'>
              <span className='text-2xl font-bold'>Economy</span>
              <div className='flex-grow' />
              <span className='text-xs font-bold'>$</span>
              <span className='text-3xl font-bold'>5</span>
            </div>
            <p className='text-sm text-gray-600'>
              Ideal for Casual collectors or large sets who prefer low-cost grading options.
            </p>
            <button className='text-center text-sm rounded-lg bg-red-500 w-full px-6 py-3 text-white hover:bg-red-600 transition'>
              Submit now
            </button>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-2 items-center'>
                <p className='text-sm'>
                  Minimum <b>25</b> cards per submission
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <p className='text-sm'>
                  <b>30</b> Business Day Turnaround
                </p>
              </div>
            </div>
          </div>
          <div className='p-8 flex flex-col gap-8 border shadow-xl rounded-2xl'>
            <div className='flex justify-space-between'>
              <span className='text-2xl font-bold'>Standard</span>
              <div className='flex-grow' />
              <span className='text-xs font-bold'>$</span>
              <span className='text-3xl font-bold'>10</span>
            </div>
            <p className='text-sm text-gray-600'>
              Ideal for Bulk submitters and collectors who want reliable grading at an affordable price.
            </p>
            <button className='text-center text-sm rounded-lg bg-red-500 w-full px-6 py-3 text-white hover:bg-red-600 transition'>
              Submit now
            </button>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-2 items-center'>
                <p className='text-sm'>
                  Minimum <b>10</b> cards per submission
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <p className='text-sm'>
                  <b>5-10</b> Business Day Turnaround
                </p>
              </div>
            </div>
          </div>
          <div className='p-8 flex flex-col gap-8 border shadow-xl rounded-2xl'>
            <div className='flex justify-space-between'>
              <span className='text-2xl font-bold'>Express</span>
              <div className='flex-grow' />
              <span className='text-xs font-bold'>$</span>
              <span className='text-3xl font-bold'>39.99</span>
            </div>
            <p className='text-sm text-gray-600'>
              Ideal for High-value cards, time-sensitive grading, or those who want quick results.
            </p>
            <button className='text-center text-sm rounded-lg bg-red-500 w-full px-6 py-3 text-white hover:bg-red-600 transition'>
              Submit now
            </button>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-2 items-center'>
                <p className='text-sm'>No minimum cards</p>
              </div>
              <div className='flex gap-2 items-center'>
                <p className='text-sm'>
                  <b>1</b> Business Day Turnaround
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className='text-gray-600 text-sm'>
          Join&nbsp;
          <a className='link cursor-pointer text-red-500 underline decoration-solid decoration-red-500'>
            membership & points program
          </a>{' '}
          &nbsp;for more benefits
        </p>
      </div>
    </div>
  )
}

export default Service
