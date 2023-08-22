import Link from 'next/link'
import React from 'react'
import Slider from '../Slider'

const OnSaleSection = () => {
  return (
    <section id='on__sale__products__slider'>
      <div className='container mx-auto'>
        <div className='block md:flex justify-between items-center mb-[24px] mt-[32px]'>
          <h2 className='text-[30px] font-semibold'>Práve teraz v akcii</h2>
          <Link
            className='hidden md:block text-secondary hover:underline'
            href='/'
          >
            zobraziť ďalšie produkty v akcii
          </Link>
        </div>
        <div className='product__slider mb-[33px]'>
          <Slider />
        </div>
      </div>
    </section>
  )
}

export default OnSaleSection
