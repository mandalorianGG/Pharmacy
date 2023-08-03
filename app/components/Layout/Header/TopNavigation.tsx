import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Icons
import {
  HiChevronDown,
  HiOutlineHeart,
  HiOutlineUser,
  HiPhone,
} from 'react-icons/hi2'

const TopNavigation = () => {
  return (
    <nav id='top__navigation'>
      <div className='flex items-center'>
        <Link href='/' className='mr-[50px]'>
          <Image src='apotheke.svg' width={198} height={51} alt='apotheke' />
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
            className='h-full w-full text-[14px] placeholder-primary font-normal pl-[45px]'
            type='text'
            placeholder='Tu zadajte čo hľadáte...'
          />
          <button className='primary__button search__button'>Hľadať</button>
        </div>
      </div>
      <ul>
        <li>
          <HiPhone size={26} className='mr-2 text-secondary' />
          <p className='text-[13px] text-primary leading-tight'>
            <span className='block'>Kontaktná infolinka</span>
            <span>+420 776 766 373 (9:00 – 17:00)</span>
          </p>
        </li>
        <li>
          <HiOutlineHeart size={26} />
          <Link href='/'>Obľúbené</Link>
        </li>
        <li>
          <HiOutlineUser size={26} />
          <Link href='/'>Môj účet</Link>
          <HiChevronDown size={18} className='ml-2' />
        </li>
      </ul>
    </nav>
  )
}

export default TopNavigation
