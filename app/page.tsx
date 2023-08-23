import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import OnSaleSection from '../components/home/OnSaleSection'
import CategoriesSection from '@/components/home/CategoriesSection'
import RecommendationSection from '@/components/home/RecommendationSection'
import NewsletterSection from '@/components/home/NewsletterSection'

const Home: React.FC = () => {
  return (
    <>
      <section id='hero__banner' className='container mx-auto pb-[32px]'>
        <Image src='/images/hero.png' width={1260} height={357} alt='hero' />
      </section>
      <OnSaleSection />
      <CategoriesSection />
      <RecommendationSection />
      <NewsletterSection />
      <section id='popular__brands' className='text-center'>
        <h3 className='text-[18px] font-bold mb-[44px]'>Obľúbené značky</h3>
        <div className='container mx-auto grid grid-cols-6 gap-[65px] h-[140px] mb-[53px]'>
          <div className='bg-blue-200 h-full'></div>
          <div className='bg-blue-200 h-full'></div>
          <div className='bg-blue-200 h-full'></div>
          <div className='bg-blue-200 h-full'></div>
          <div className='bg-blue-200 h-full'></div>
          <div className='bg-blue-200 h-full'></div>
        </div>
      </section>
    </>
  )
}

export default Home
