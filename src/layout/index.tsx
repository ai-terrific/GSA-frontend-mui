import { Box } from '@mui/material'
import { Suspense, useCallback, useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import SimpleBarCore from 'simplebar-core'

import LoadingFallback from '@/components/Loading'
import { Main } from '@/layout/components/Container'

import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const scrollRef = useRef<SimpleBarCore | null>(null)

  const scrollToTop = useCallback(() => {
    const scrollElement = scrollRef.current?.getScrollElement()
    if (scrollElement) {
      scrollElement.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    scrollToTop()
  }, [pathname, navigate, scrollToTop])

  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      <Header />
      <Main>
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Box>
  )
}

export default Layout
