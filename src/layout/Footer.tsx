export default function Footer() {
  return (
    <footer className='sticky w-screen bg-zinc-50 lg:pt-12'>
      <div className='mx-auto header-container'>
        <div className='flex gap-4 mb-4'>
          <aside className='lg:max-w-xs flex flex-col gap-4'>
            <img src='/logo.svg' alt='logo' className='w-44' />
            <p className='text-sm'>
              Grading Specialists Authority (GSA) & GSA/DNA are divisions of Collectors Holdings, Inc.
            </p>
          </aside>
          <div className='flex gap-8 w-4/5 justify-between'>
            <nav className='flex flex-col gap-3'>
              <h6 className='text-sm text-dark-base-2 md:mb-0 lg:mb-8'>Home</h6>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                Services &amp; Prices
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                Values
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                Set Registry
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                FAQ
              </a>
            </nav>
            <nav className='flex flex-col gap-3'>
              <h6 className='text-sm text-dark-base-2 mb-1 md:mb-0 lg:mb-8'>Research</h6>
              <a className='link-hover link font-semibold text-dark-base-1' href='/research'>
                Find My Package
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/research'>
                Grading Specials
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/research'>
                Cert Verification
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/research'>
                Order Status
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/service'>
                Submission Center
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/service'>
                Grading Standards
              </a>
            </nav>
            <nav className='flex flex-col gap-3'>
              <h6 className='text-sm text-dark-base-2 mb-1 md:mb-0 lg:mb-8'>Support</h6>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                Price Guide
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                Articles
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                Apps
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                Forums
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                Store
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                Dealer Directory
              </a>
            </nav>
            <nav className='flex flex-col gap-3'>
              <h6 className='text-sm text-dark-base-2 mb-1 md:mb-0 lg:mb-8'>More</h6>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                About Us
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                Advertise With Us
              </a>
              <a className='link-hover link font-semibold text-dark-base-1' href='/#'>
                Privacy
              </a>
            </nav>
          </div>
        </div>
        <div className='flex justify-between py-4 items-center'>
          <span className='text-sm'>© 2024 GSA, Inc. All rights reserved</span>
          <nav className='flex gap-4'>
            <a className='text-dark-base-1' href='/#'>
              Terms of Use
            </a>
            <a className='text-dark-base-1' href='/#'>
              Privacy
            </a>
            <a className='text-dark-base-1' href='/#'>
              Contact
            </a>
            <a className='text-dark-base-1' href='/#'>
              Cookie
            </a>
            <a className='text-dark-base-1' href='/#'>
              Preferences
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
