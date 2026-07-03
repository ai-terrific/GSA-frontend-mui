import { FC } from 'react'

const TrackingValue: FC = () => {
  return (
    <section className='px-5 detail-container mx-auto py-12'>
      <div className='flex gap-50'>
        <div className='max-w-400 flex flex-col gap-3 text-black'>
          <span className='text-7xl'>Tracking Value</span>
          <p className='text-gray-600 sm:text-xl'>
            Hobby love is won with each closing auction and final offer. Enlist free real-time pricing data to time the
            market and curate in-the-moment.
          </p>
        </div>
        <div className='flex flex-col w-full gap-6'>
          <div className='flex p-8 gap-6 shadow-xl rounded-xl'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col gap-6'>
                <h4 className='text-2xl font-normal'>2003 Pokemon Skyridge Charized - Holo #146</h4>
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between py-1 px-4 rounded-full bg-gray-200 items-center'>
                    <span className='text-xl font-medium'>$4,000</span>
                    <span className='text-sm'>PSA 8</span>
                  </div>
                  <div className='flex justify-between py-1 px-4 rounded-full bg-gray-200 items-center'>
                    <span className='text-xl font-medium'>$5,500</span>
                    <span className='text-sm'>PSA 9</span>
                  </div>
                  <div className='flex justify-between py-1 px-4 rounded-full bg-gray-200 items-center'>
                    <span className='text-xl font-medium text-green-500'>$18,000+</span>
                    <span className='text-sm'>PSA 10</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='text-32 font-bold'>PSA Price Guide</h4>
                <p className='text-xl text-black/50'>The numbers behind the grade.</p>
              </div>
            </div>
            <img src='/tracking-1.png' alt='tracking-1' />
          </div>

          <div className='flex p-8 gap-6 shadow-xl rounded-xl'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col gap-6'>
                <h4 className='text-2xl font-normal'>1989 Upper Deck Ken Griffey jr. #1 PSA 120</h4>
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between py-1 px-4 rounded-full bg-gray-200 items-center'>
                    <span className='text-xl font-medium'>12,245</span>
                    <span className='text-sm'>Sales</span>
                  </div>
                  <div className='flex justify-between py-1 px-4 rounded-full bg-gray-200 items-center'>
                    <span className='text-xl font-medium'>$2,393</span>
                    <span className='text-sm'>Last Sold</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='text-32 font-bold'>Auction Prices Realized</h4>
                <p className='text-xl text-black/50'>The final bids are in.</p>
              </div>
            </div>
            <img src='/tracking-2.png' alt='tracking-2' />
          </div>

          <div className='flex p-8 gap-6 shadow-xl rounded-xl'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col gap-6'>
                <h4 className='text-2xl font-normal'>1986 Fleer Michael Jordan #57</h4>
                <div className='flex flex-col justify-center items-center py-6 px-4 rounded-xl bg-gray-200'>
                  <span className='text-32 font-medium'>$18,000.00</span>
                  <span className='text-sm'>Jan 19, 2024</span>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='text-32 font-bold'>Card Ladder</h4>
                <p className='text-xl text-black/50'>Market trends by the millions.</p>
              </div>
            </div>
            <img src='/tracking-3.png' alt='tracking-3' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackingValue
