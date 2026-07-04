import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

//@ts-ignore
import 'swiper/css' // Mandatory core styles
//@ts-ignore
import 'swiper/css/navigation'

//@ts-ignore
import 'swiper/css/pagination'
import { Box, Button, ButtonProps, Container, Stack, styled, Typography } from '@mui/material'
import { colors, gray, red } from '@/theme'
import { purple } from '@mui/material/colors'
import { DetailButton } from '@/components/Core/Button'

const pagination = {
  el: '.custom-dots', // Links to your custom element
  clickable: true
}

const Hero: FC = () => {
  return (
    <Box component='section' sx={{ py: 25 }}>
      <Box
        component='img'
        src='/strip1.svg'
        alt='strip1'
        sx={{ position: 'absolute', width: '50%', left: 0, top: -32, zIndex: -10 }}
      />
      <Container sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: 25 }}>
        <Stack direction='column' sx={{ maxWidth: 540, gap: 25 }} useFlexGap>
          <Stack direction='column' sx={{ gap: 8 }}>
            <Stack sx={{ gap: 3 }} useFlexGap>
              <Typography variant='h5' sx={{ color: colors.red }}>
                🔥 Collectors Crossovers
              </Typography>
              <Typography variant='h2' sx={{ fontSize: 50, fontWeight: 'bold' }}>
                Donruss 90 - Juan Gongaley of Rangers
              </Typography>
              <Typography variant='body1' sx={{ fontSize: 20, color: gray[500] }}>
                Batter up-submit Baseball Cards 2020-Present at just $16.99/card.
              </Typography>
            </Stack>
            <DetailButton variant='contained'>
              <span>See Detail</span>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4143 2.58579 12.75 3 12.75L3 11.25ZM14 12.75C14.4142 12.75 14.75 12.4143 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25V12.75ZM14 9.1354H13.25V9.1354H14ZM17.22 7.55059L17.6775 6.95628V6.95628L17.22 7.55059ZM17.22 16.4495L17.6775 17.0438V17.0438L17.22 16.4495ZM14 14.8647H14.75V14.8647H14ZM20.9413 13.5849L20.4838 12.9905V12.9905L20.9413 13.5849ZM20.9413 10.4152L20.4838 11.0095V11.0095L20.9413 10.4152ZM3 12.75L14 12.75V11.25L3 11.25L3 12.75ZM20.4838 12.9905L16.7625 15.8552L17.6775 17.0438L21.3988 14.1792L20.4838 12.9905ZM14.75 14.8647V9.1354H13.25V14.8647H14.75ZM16.7625 8.14489L20.4838 11.0095L21.3988 9.82093L17.6775 6.95628L16.7625 8.14489ZM14.75 9.1354C14.75 8.0981 15.9405 7.51214 16.7625 8.14489L17.6775 6.95628C15.8692 5.56424 13.25 6.85334 13.25 9.1354H14.75ZM16.7625 15.8552C15.9405 16.4879 14.75 15.902 14.75 14.8647H13.25C13.25 17.1467 15.8692 18.4358 17.6775 17.0438L16.7625 15.8552ZM21.3988 14.1792C22.8288 13.0783 22.8288 10.9218 21.3988 9.82093L20.4838 11.0095C21.1338 11.5099 21.1338 12.4902 20.4838 12.9905L21.3988 14.1792Z'
                  fill='white'
                />
              </svg>
            </DetailButton>
          </Stack>
          <div className='custom-dots'></div>
        </Stack>
        <Box
          sx={{
            mx: 'auto',
            position: 'relative',
            display: 'flex',
            maxWidth: { xs: 'xs', sm: '540px' }, // Equivalent to max-w-xs and sm:max-w-540
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'visible',
            borderRadius: '24px', // Equivalent to rounded-3xl
            bgcolor: 'grey.100', // Equivalent to bg-gray-100,
            py: 12.5
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1.8}
            slidesPerGroup={1}
            centeredSlides={true}
            pagination={pagination}
            loop={true}
            autoplay={{
              delay: 1000, // Time in ms between transitions
              disableOnInteraction: false // Keeps autoplay running after user swipes
            }}
          >
            <SwiperSlide>
              <img src='/slider1.png' alt='slider1' width={300} className='m-auto' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/slider2.png' alt='slider2' width={300} className='m-auto' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/slider3.png' alt='slider3' width={300} className='m-auto' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/slider4.png' alt='slider4' width={300} className='m-auto' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/slider5.png' alt='slider5' width={300} className='m-auto' />
            </SwiperSlide>
          </Swiper>
          <Box sx={{ position: 'absolute', left: 24, top: -32, zIndex: 10 }}>
            <svg width='67' height='67' viewBox='0 0 67 67' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M65.9392 43.5564C66.612 44.1474 66.23 45.2568 65.3365 45.3067L40.1367 46.7133C39.8685 46.7283 39.6176 46.8506 39.4408 47.0528L22.8044 66.068C22.2144 66.7424 21.1034 66.3586 21.0539 65.4633L19.6574 40.2187C19.6426 39.9503 19.5204 39.699 19.3184 39.5216L0.341926 22.8543C-0.33092 22.2634 0.0510974 21.1539 0.944612 21.104L26.1444 19.6974C26.4127 19.6825 26.6635 19.5601 26.8404 19.3579L43.4767 0.342729C44.0667 -0.331676 45.1777 0.0521227 45.2272 0.947464L46.6237 26.192C46.6385 26.4605 46.7607 26.7117 46.9627 26.8891L65.9392 43.5564Z'
                fill='#E24744'
              />
            </svg>
          </Box>
          <Box sx={{ position: 'absolute', left: 64, top: 12, zIndex: 10, width: 15, height: 15 }}>
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M13.6452 8.6893C14.2862 9.31468 13.8467 10.4026 12.9518 10.4057L8.84761 10.4196C8.57897 10.4205 8.32208 10.5296 8.13485 10.7223L5.27435 13.6656C4.64983 14.3082 3.56043 13.8668 3.55783 12.97L3.54592 8.86285C3.54514 8.59402 3.43626 8.33674 3.24384 8.14901L0.304103 5.28091C-0.336898 4.65553 0.102661 3.56759 0.997561 3.56455L5.10172 3.55059C5.37036 3.54968 5.62725 3.44061 5.81448 3.24796L8.67498 0.304646C9.2995 -0.337954 10.3889 0.103464 10.3915 1.00017L10.4034 5.10736C10.4042 5.37619 10.5131 5.63347 10.7055 5.8212L13.6452 8.6893Z'
                fill='#E24744'
              />
            </svg>
          </Box>
          <Box sx={{ position: 'absolute', left: -64, top: '50%' }}>
            <svg width='112' height='113' viewBox='0 0 112 113' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0.342001 74.3034C-0.330851 74.8944 0.0511686 76.0039 0.944682 76.0537L44.6292 78.4921C44.8974 78.5071 45.1483 78.6295 45.3252 78.8316L74.167 111.798C74.757 112.472 75.868 112.088 75.9176 111.193L78.3385 67.4272C78.3534 67.1588 78.4756 66.9075 78.6776 66.7301L111.574 37.8369C112.247 37.246 111.865 36.1365 110.971 36.0866L67.2866 33.6483C67.0183 33.6333 66.7675 33.5109 66.5906 33.3087L37.7488 0.342713C37.1587 -0.331691 36.0477 0.052107 35.9982 0.947448L33.5772 44.7132C33.5624 44.9816 33.4402 45.2328 33.2382 45.4103L0.342001 74.3034Z'
                fill='#F1F1F1'
              />
            </svg>
          </Box>
          <Box sx={{ position: 'absolute', left: -64, top: '66%' }}>
            <svg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0.304105 16.4967C-0.336895 17.122 0.102663 18.21 0.997562 18.213L9.69224 18.2426C9.96088 18.2435 10.2178 18.3526 10.405 18.5452L16.4688 24.7846C17.0934 25.4272 18.1828 24.9858 18.1854 24.0891L18.2106 15.3824C18.2114 15.1136 18.3203 14.8563 18.5127 14.6686L24.7405 8.59253C25.3815 7.96715 24.942 6.8792 24.0471 6.87616L15.3524 6.8466C15.0838 6.84569 14.8269 6.73661 14.6396 6.54396L8.5758 0.304577C7.95128 -0.338023 6.86188 0.103393 6.85928 1.0001L6.83402 9.70675C6.83324 9.97558 6.72437 10.2329 6.53195 10.4206L0.304105 16.4967Z'
                fill='#F1F1F1'
              />
            </svg>
          </Box>
        </Box>
      </Container>
      <Box
        component='img'
        src='/strip2.svg'
        alt='strip2'
        sx={{ position: 'absolute', width: '50%', right: '-33%', bottom: '-33%' }}
      />
    </Box>
  )
}

export default Hero
