import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import OnSaleSection from '../components/home/OnSaleSection'
import CategoriesSection from '@/components/home/CategoriesSection'

const Home: React.FC = () => {
  return (
    <>
      <section id='hero__banner' className='container mx-auto pb-[32px]'>
        <Image src='/images/hero.png' width={1260} height={357} alt='hero' />
      </section>
      <OnSaleSection />
      <CategoriesSection />
      <section id='recommended__products__slider' className='pt-[32px]'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center mb-[24px]'>
            <h2 className='text-[30px] font-semibold'>Odporúčame</h2>
            <Link href='/'>zobraziť ďalšie produkty v akcii</Link>
          </div>
          <div className='product__slider'>
            <div className='product__slider h-[411px] grid grid-cols-4 gap-[20px] mt-[24px]'>
              <div className='h-full bg-slate-300'></div>
              <div className='h-full bg-slate-300'></div>
              <div className='h-full bg-slate-300'></div>
              <div className='h-full bg-slate-300'></div>
            </div>
            <div className='product__slider__dots flex items-center justify-center gap-[10px] mt-[24px]'>
              <button className='w-[16px] h-[16px] rounded-full bg-[#191919]'></button>
              <button className='w-[16px] h-[16px] rounded-full bg-[#c4c4c4]'></button>
              <button className='w-[16px] h-[16px] rounded-full bg-[#c4c4c4]'></button>
            </div>
          </div>
        </div>
      </section>
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
