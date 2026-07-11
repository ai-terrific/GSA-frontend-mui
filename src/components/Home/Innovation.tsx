import { Box, Container, Grid } from '@mui/material'

import { SectionTitle } from '../Core/Title'

const Innovation = () => {
  return (
    <Box component='section' sx={{ py: 25 }}>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <SectionTitle>Innovations in Grading Technology</SectionTitle>
        <Grid container spacing={10}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                boxShadow: 2,
                borderRadius: 3,
                maxWidth: 540
              }}
            >
              <div className='flex gap-4 items-center max-sm:flex-col max-sm:h-auto'>
                <div className='bg-base-red bg-opacity-10 p-2 rounded-8'>
                  <svg width='52' height='52' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect width='52' height='52' rx='8' fill='#E24744' fill-opacity='0.1' />
                    <path
                      d='M25.4543 14.712C25.595 14.1418 26.4057 14.1418 26.5465 14.712L27.696 19.3687C28.2969 21.8028 30.1974 23.7033 32.6315 24.3042L37.2883 25.4538C37.8584 25.5945 37.8584 26.4052 37.2883 26.546L32.6315 27.6956C30.1974 28.2964 28.2969 30.197 27.696 32.631L26.5465 37.2878C26.4057 37.8579 25.595 37.8579 25.4543 37.2878L24.3047 32.631C23.7038 30.1969 21.8033 28.2964 19.3692 27.6956L14.7125 26.546C14.1423 26.4052 14.1423 25.5945 14.7125 25.4538L19.3692 24.3042C21.8033 23.7033 23.7038 21.8028 24.3047 19.3687L25.4543 14.712ZM16.7273 13.6059C16.7977 13.3208 17.203 13.3208 17.2734 13.6059L17.362 13.9648C17.6875 15.2833 18.7169 16.3127 20.0354 16.6382L20.3943 16.7268C20.6794 16.7972 20.6794 17.2025 20.3943 17.2729L20.0354 17.3615C18.7169 17.687 17.6875 18.7164 17.362 20.0349L17.2734 20.3938C17.203 20.6789 16.7977 20.6789 16.7273 20.3938L16.6387 20.0349C16.3132 18.7164 15.2838 17.687 13.9653 17.3615L13.6064 17.2729C13.3213 17.2025 13.3213 16.7972 13.6064 16.7268L13.9653 16.6382C15.2838 16.3127 16.3132 15.2833 16.6387 13.9648L16.7273 13.6059Z'
                      stroke='#E24744'
                      stroke-width='2'
                    />
                  </svg>
                </div>
                <h3 className='font-manrope text-28 max-lg:text-24 font-bold leading-9 text-dark-base-1'>
                  AI-Powered Precision Grading
                </h3>
              </div>
              <p className='font-manrope text-16 font-medium leading-7 text-black/50'>
                We utilizes machine learning to scan and analyze each card, ensuring hyper-accurate centering, corner,
                surface, and edge grading with minimal human error. This enhances transparency and precision in grades,
                with a detailed report available for collectors to review.
              </p>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className='flex gap-4 items-center max-sm:flex-col max-sm:h-auto'>
              <div className='bg-base-red bg-opacity-10 p-2 rounded-8'>
                <svg width='52' height='52' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <rect width='52' height='52' rx='8' fill='#E24744' fill-opacity='0.1' />
                  <path
                    d='M26 12.5V14M26 38V39.5M39.5 26H38M14 26H12.5M35.5459 35.5459L34.4853 34.4853M17.5147 17.5147L16.4541 16.4541M35.546 16.4541L34.4854 17.5148M17.5148 34.4854L16.4541 35.546M32 26C32 29.3137 29.3137 32 26 32C22.6863 32 20 29.3137 20 26C20 22.6863 22.6863 20 26 20C29.3137 20 32 22.6863 32 26Z'
                    stroke='#E24744'
                    stroke-width='2.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <h3 className='font-manrope text-28 max-lg:text-24 font-bold leading-9 text-dark-base-1'>
                Advanced UV and Surface Scanning
              </h3>
            </div>
            <p className='font-manrope text-16 font-medium leading-7 text-black/50'>
              Specialized UV light and surface-scanning technology detect microscopic imperfections, helping to catch
              issues missed by traditional grading techniques.
            </p>
          </Grid>
        </Grid>
        <div className='grid grid-cols-2 max-md:flex max-md:flex-col max-md:items-center gap-10'>
          <div className='flex flex-col gap-8 max-w-500 p-10 rounded-2xl border border-dark-base-6 bg-white shadow-xl'>
            <div className='flex gap-4 items-center max-sm:flex-col max-sm:h-auto'>
              <div className='bg-base-red bg-opacity-10 p-2 rounded-8'>
                <svg width='52' height='52' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <rect width='52' height='52' rx='8' fill='#E24744' fill-opacity='0.1' />
                  <path
                    d='M26 39.5L14 33.5V18.5L26 12.5L38 18.5V33.5L26 39.5ZM38 18.5L26 24.5M26 24.5L14 18.5M26 24.5V39.5'
                    stroke='#E24744'
                    stroke-width='2.5'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <h3 className='font-manrope text-28 max-lg:text-24 font-bold leading-9 text-dark-base-1'>
                Blockchain-Based Certificate of Authenticity
              </h3>
            </div>
            <p className='font-manrope text-16 font-medium leading-7 text-black/50'>
              Each card comes with a tamper-proof, digital certificate stored on the blockchain, ensuring the
              authenticity and grading history of the card is secure and verifiable.
            </p>
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Innovation
