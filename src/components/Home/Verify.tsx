import { FC } from 'react'

const Verify: FC = () => {
  return (
    <section className='px-5 detail-container mx-auto py-24'>
      <div className='w-full bg-black p-8 rounded-3xl flex'>
        <div className='grow flex gap-6 justify-center'>
          <img src='/cert.svg' alt='cert' />
          <div className='flex flex-col flex-grow gap-1'>
            <span className='text-white text-32 font-semibold'>Cert Verification</span>
            <p className='text-base text-white'>Verify the validity of PSA & PSA/DNA certification numbers.</p>
          </div>
        </div>
        <div className='grow flex items-center gap-4'>
          <input
            className='min-h-12 w-full rounded-lg border px-4 text-sm text-black text-16 transition invalid:border-red-500 invalid:pr-14 invalid:text-red-600 invalid:ring-red-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 disabled:border-slate-200 disabled:bg-slate-200 group-focus-within/input:border-gray-500 group-focus-within/input:ring-gray-500 dark:invalid:text-red-600'
            placeholder='Enter 7 or 8 digit cert number'
          />
          <button className='bg-red-500 hover:bg-red-600 flex gap-2 inline-flex rounded justify-center items-center p-3'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clip-path='url(#clip0_1203_8856)'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M7.02984 2.29711C7.88266 -0.691159 12.1176 -0.691159 12.9704 2.29711C13.2428 3.25141 14.2232 3.81746 15.1858 3.57617C18.2001 2.82059 20.3176 6.48818 18.1561 8.72087C17.4658 9.43388 17.4658 10.566 18.1561 11.279C20.3176 13.5117 18.2001 17.1793 15.1858 16.4237C14.2232 16.1824 13.2428 16.7484 12.9704 17.7027C12.1176 20.691 7.88266 20.691 7.02984 17.7027C6.7575 16.7484 5.77707 16.1824 4.81445 16.4237C1.80012 17.1793 -0.317359 13.5117 1.84415 11.279C2.53443 10.566 2.53443 9.43388 1.84415 8.72087C-0.317358 6.48818 1.80012 2.82059 4.81445 3.57617C5.77707 3.81746 6.7575 3.25141 7.02984 2.29711ZM13.8136 7.90005C14.0346 7.63488 13.9988 7.24077 13.7336 7.0198C13.4684 6.79882 13.0743 6.83465 12.8534 7.09982L9.96706 10.5634C9.65807 10.9342 9.46831 11.1595 9.31199 11.3007C9.2395 11.3661 9.1965 11.3922 9.17588 11.4022C9.1717 11.4042 9.16872 11.4055 9.16683 11.4062C9.16494 11.4055 9.16196 11.4042 9.15777 11.4022C9.13716 11.3922 9.09416 11.3661 9.02166 11.3007C8.86534 11.1595 8.67559 10.9342 8.3666 10.5634L7.14697 9.09982C6.92599 8.83465 6.53189 8.79882 6.26671 9.0198C6.00154 9.24077 5.96571 9.63488 6.18669 9.90005L7.43294 11.3956C7.70666 11.7241 7.95342 12.0203 8.18392 12.2284C8.4347 12.4549 8.75059 12.6566 9.16683 12.6566C9.58307 12.6566 9.89896 12.4549 10.1497 12.2284C10.3802 12.0203 10.627 11.7241 10.9007 11.3956L13.8136 7.90005Z'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_1203_8856'>
                  <rect width='20' height='20' fill='white' />
                </clipPath>
              </defs>
            </svg>
            <span className='text-white text-lg rounded'>Verify</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Verify
