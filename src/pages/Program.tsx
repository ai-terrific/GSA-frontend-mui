import { FC } from 'react'

const Service: FC = () => {
  return (
    <div className='detail-container mx-auto p-12'>
      <div className='flex flex-col gap-8 justify-center min-h-screen'>
        <div className='flex flex-col items-center gap-4'>
          <h3 className='text-3xl font-bold'>Membership & Points Program</h3>
          <p className='text-gray-600 text-sm'>Get more benefits by joining membership & points program</p>
        </div>
        <div className='grid grid-cols-3 max-md:flex max-lg:flex-col gap-4'>
          <div className='p-8 flex flex-col gap-8 border shadow-xl rounded-2xl hover:scale-105 transition'>
            <div className='flex justify-space-between items-end'>
              <span className='text-2xl font-bold'>Bronze</span>
              <div className='flex-grow' />
              <span className='text-3xl font-bold'>Free</span>
              <span className='text-xs'>/ year</span>
            </div>
            <p className='text-sm text-gray-600'>Ideal for dedicated collectors looking for extra value.</p>
            <button className='text-center text-sm rounded-lg bg-red-500 w-full px-6 py-3 text-white hover:bg-red-600 transition'>
              Upgrade
            </button>
            <div className='flex flex-col gap-3 text-gray-600'>
              <div className='flex gap-2'>
                <p className='text-sm'>
                  Get <b>1</b> point for every $10 spent on grading*
                </p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>
                  Get <b>5%</b> Discounts on bulk submissions (over 50 cards)
                </p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>Free submission tracking.</p>
              </div>
            </div>
          </div>
          <div className='p-8 flex flex-col gap-8 border shadow-xl rounded-2xl hover:scale-105 transition'>
            <div className='flex justify-space-between'>
              <span className='text-2xl font-bold'>Silver</span>
              <div className='flex-grow' />
              <span className='text-xs font-bold'>$</span>
              <span className='text-3xl font-bold'>99</span>
              <span className='text-xs font-bold'>/ year</span>
            </div>
            <p className='text-sm text-gray-600'>
              Ideal for Bulk submitters and collectors who want reliable grading at an affordable price.
            </p>
            <button className='text-center text-sm rounded-lg bg-red-500 w-full px-6 py-3 text-white hover:bg-red-600 transition'>
              Submit now
            </button>
            <div className='flex flex-col gap-3 text-gray-600'>
              <div className='flex gap-2'>
                <p className='text-sm'>
                  Get <b>1.5</b> point for every $10 spent on grading*
                </p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>
                  Get <b>10%</b> Discounts on bulk submissions (over 50 cards)
                </p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>Free submission tracking.</p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>Free Express grading upgrade (once a year)</p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>Priority customer service</p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>Early access to new grading technology or features</p>
              </div>
            </div>
          </div>
          <div className='p-8 flex flex-col gap-8 border shadow-xl rounded-2xl hover:scale-105 transition'>
            <div className='flex justify-space-between'>
              <span className='text-2xl font-bold'>Express</span>
              <div className='flex-grow' />
              <span className='text-xs font-bold'>$</span>
              <span className='text-3xl font-bold'>39.99</span>
              <span className='text-xs'>/year</span>
            </div>
            <p className='text-sm text-gray-600'>
              Ideal for High-value cards, time-sensitive grading, or those who want quick results.
            </p>
            <button className='text-center text-sm rounded-lg bg-red-500 w-full px-6 py-3 text-white hover:bg-red-600 transition'>
              Submit now
            </button>
            <div className='flex flex-col gap-3 text-gray-600'>
              <div className='flex gap-2'>
                <p className='text-sm'>
                  Get <b>2</b> point for every $10 spent on grading*
                </p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>
                  Get <b>15%</b> Discounts on bulk submissions (over 50 cards)
                </p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>Free submission tracking.</p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>
                  Free <b>2</b> Express grading upgrade (once a year)
                </p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>Priority customer service</p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>Priority access to new grading technologies and beta testing</p>
              </div>
              <div className='flex gap-2'>
                <p className='text-sm'>Free digital population report for any submitted set</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-gray-600 text-sm'>*Redeem points for free grading submissions or upgrades:</p>
          <div>
            <p className='text-gray-600 text-sm'>100 points = 1 free standard submission.</p>
            <p className='text-gray-600 text-sm'>200 points = 1 free Express submission.</p>
            <p className='text-gray-600 text-sm'>50 points = Upgrade from Standard to Express.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
