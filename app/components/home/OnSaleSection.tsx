import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductSlide from '../ProductSlide'

const OnSaleSection = () => {
  return (
    <section id='on__sale__products__slider'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center mb-[24px] mt-[32px]'>
          <h2 className='text-[30px] font-semibold'>Práve teraz v akcii</h2>
          <Link className='text-secondary hover:underline' href='/'>
            zobraziť ďalšie produkty v akcii
          </Link>
        </div>
        <div className='product__slider mb-[33px]'>
          <div className='h-[411px] grid grid-cols-4 gap-[20px] mt-[24px]'>
            <ProductSlide />
          </div>
          <div className='slider__dots flex items-center justify-center gap-[10px] mt-[24px]'>
            <button className='w-[16px] h-[16px] rounded-full bg-[#191919]'></button>
            <button className='w-[16px] h-[16px] rounded-full bg-[#c4c4c4]'></button>
            <button className='w-[16px] h-[16px] rounded-full bg-[#c4c4c4]'></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnSaleSection
