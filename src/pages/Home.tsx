import Features from '@/components/Home/Features'
import Innovation from '@/components/Home/Innovation'
import Hero from '@/components/Home/Hero'
import News from '@/components/Home/News'
import Services from '@/components/Home/Services'
import SpecialServices from '@/components/Home/SpecialServices'
import TrackingValue from '@/components/Home/TrackingValue'
import Verify from '@/components/Home/Verify'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Innovation />
      <Services />
      <SpecialServices />
      <Verify />
      <TrackingValue />
      <Features />
      <News />
    </>
  )
}

export default Home
