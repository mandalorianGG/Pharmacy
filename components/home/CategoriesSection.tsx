import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoriesSection = () => {
  return (
    <section id='categories' className='bg-[#f8f8f8] pb-[28px]'>
      <div className='container mx-auto'>
        <div
          id='categories__banner'
          className='h-auto bg-slate-200 mb-[32px] flex items-center justify-center'
        >
          <Image
            src='/images/categories-banner.webp'
            alt='banner'
            width={1140}
            height={250}
            className='w-full h-auto'
          />
        </div>
        <div
          id='categories'
          className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[24px]'
        >
          <div className='relative'>
            <Image
              src='/images/category-1.webp'
              alt='nachladenie'
              width={231}
              height={219}
              className='w-full h-auto'
            />
            <div className='absolute py-4 w-full bg-black/80 bottom-0 text-white text-center'>
              <p className='font-semibold text-lg mb-1'>Nachladenie</p>
              <Link href='/' className='text-sm hover:underline'>
                zobraziť kategóriu
              </Link>
            </div>
          </div>
          <div className='relative'>
            <Image
              src='/images/category-2.webp'
              alt='pre deti'
              width={231}
              height={219}
              className='w-full h-auto'
            />
            <div className='absolute py-4 w-full bg-black/80 bottom-0 text-white text-center'>
              <p className='font-semibold text-lg mb-1'>Pre deti</p>
              <Link href='/' className='text-sm hover:underline'>
                zobraziť kategóriu
              </Link>
            </div>
          </div>
          <div className='relative'>
            <Image
              src='/images/category-3.webp'
              alt='dentálna hygiena'
              width={231}
              height={219}
              className='w-full h-auto'
            />
            <div className='absolute py-4 w-full bg-black/80 bottom-0 text-white text-center'>
              <p className='font-semibold text-lg mb-1'>Dentálna hygiena</p>
              <Link href='/' className='text-sm hover:underline'>
                zobraziť kategóriu
              </Link>
            </div>
          </div>
          <div className='relative'>
            <Image
              src='/images/category-4.webp'
              alt='čaje a potraviny'
              width={231}
              height={219}
              className='w-full h-auto'
            />
            <div className='absolute py-4 w-full bg-black/80 bottom-0 text-white text-center'>
              <p className='font-semibold text-lg mb-1'>Čaje a potraviny</p>
              <Link href='/' className='text-sm hover:underline'>
                zobraziť kategóriu
              </Link>
            </div>
          </div>
          <div className='relative'>
            <Image
              src='/images/category-5.webp'
              alt='dostupné lieky'
              width={231}
              height={219}
              className='w-full h-auto'
            />
            <div className='absolute py-4 w-full bg-black/80 bottom-0 text-white text-center'>
              <p className='font-semibold text-lg mb-1'>Dostupné lieky</p>
              <Link href='/' className='text-sm hover:underline'>
                zobraziť kategóriu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
