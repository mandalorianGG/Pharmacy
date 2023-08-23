import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import OnSaleSection from '../components/home/OnSaleSection'
import CategoriesSection from '@/components/home/CategoriesSection'
import RecommendationSection from '@/components/home/RecommendationSection'

const Home: React.FC = () => {
  return (
    <>
      <section id='hero__banner' className='container mx-auto pb-[32px]'>
        <Image src='/images/hero.png' width={1260} height={357} alt='hero' />
      </section>
      <OnSaleSection />
      <CategoriesSection />
      <RecommendationSection />
      <section id='newsletter'>
        <div className='container mx-auto flex gap-[30px] h-[219px] my-[48px]'>
          <div className='flex-1 flex items-center justify-center h-full bg-cyan-300'>
            banner for user registration
          </div>
          <div className='flex-1 flex items-center justify-center h-full bg-green-300 rounded-[5px]'>
            newsletter
          </div>
        </div>
      </section>
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
