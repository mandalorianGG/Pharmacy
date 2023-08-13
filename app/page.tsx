import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <section id='hero__banner' className='container mx-auto pb-[32px]'>
        <Image src='/images/hero.png' width={1260} height={357} alt='hero' />
      </section>
      <section id='on__sale__products__slider'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center mb-[24px] mt-[32px]'>
            <h2 className='text-[30px] font-semibold'>Práve teraz v akcii</h2>
            <Link href='/'>zobraziť ďalšie produkty v akcii</Link>
          </div>
          <div className='product__slider mb-[33px]'>
            <div className='h-[411px] grid grid-cols-4 gap-[20px] mt-[24px]'>
              <div className='h-full bg-slate-300'></div>
              <div className='h-full bg-slate-300'></div>
              <div className='h-full bg-slate-300'></div>
              <div className='h-full bg-slate-300'></div>
            </div>
            <div className='slider__dots flex items-center justify-center gap-[10px] mt-[24px]'>
              <button className='w-[16px] h-[16px] rounded-full bg-[#191919]'></button>
              <button className='w-[16px] h-[16px] rounded-full bg-[#c4c4c4]'></button>
              <button className='w-[16px] h-[16px] rounded-full bg-[#c4c4c4]'></button>
            </div>
          </div>
        </div>
      </section>
      <section id='categories' className='bg-[#f8f8f8] pb-[28px]'>
        <div className='container mx-auto'>
          <div
            id='categories__banner'
            className='h-[327px] bg-slate-200 mb-[32px] flex items-center justify-center'
          >
            categories banner
          </div>
          <div id='categories' className='grid grid-cols-5 gap-[24px]'>
            <div className='h-[219px] bg-slate-400'></div>
            <div className='h-[219px] bg-slate-400'></div>
            <div className='h-[219px] bg-slate-400'></div>
            <div className='h-[219px] bg-slate-400'></div>
            <div className='h-[219px] bg-slate-400'></div>
          </div>
        </div>
      </section>
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
