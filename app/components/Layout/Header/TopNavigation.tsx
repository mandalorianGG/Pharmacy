import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopNavigation = () => {
  return (
    <nav id='top__navigation' className='max-w-[1213px] mx-auto flex mb-[45px]'>
      <div className='flex items-center mr-[61px]'>
        <Link
          href='/'
          className='flex items-center justify-center w-[164px] h-[64px] mr-[50px] text-center bg-gray-300'
        >
          Apateka
        </Link>
        <div className='relative overflow-hidden w-[458px] h-[45px] rounded-[3px]'>
          <Image
            className='absolute top-[11px] left-[11px]'
            src='/icons/search.svg'
            width={24}
            height={24}
            alt='search'
          />
          <input
            className='h-full w-full text-[14px] placeholder-[#595959] font-normal pl-[45px]'
            type='text'
            placeholder='Tu zadajte čo hľadáte...'
          />
          <button className='absolute top-0 right-0 w-[71px] h-[45px] bg-[#009432] text-white text-[14px] font-semibold'>
            Hľadať
          </button>
        </div>
      </div>
      <ul className='flex items-center'>
        <li className='h-[32px] mr-[48px]'>
          <span></span>
          <p className='text-[13px] text-[#535353] leading-tight'>
            <span className='block'>Kontaktná infolinka</span>
            <span>+420 776 766 373 (9:00 – 17:00)</span>
          </p>
        </li>
        <li className='flex items-center h-[32px] mr-[32.5px]'>
          <span></span>
          <Link href='/' className='text-[14px] text-[#535353]'>
            Obľúbené
          </Link>
        </li>
        <li className='flex items-center h-[32px]'>
          <span></span>
          <Link href='/' className='text-[14px] text-[#535353]'>
            Môj účet
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default TopNavigation
