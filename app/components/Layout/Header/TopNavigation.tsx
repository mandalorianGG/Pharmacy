import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Icons
import {
  HiBars3,
  HiChevronDown,
  HiOutlineHeart,
  HiOutlineUser,
  HiPhone,
} from 'react-icons/hi2'

const TopNavigation = () => {
  return (
    <nav id='top__navigation'>
      <div className='flex items-center grow xl:grow-0 mr-[50px] xl:mr-0'>
        <Link href='/' className='mr-[50px]'>
          <Image src='apotheke.svg' width={198} height={51} alt='apotheke' />
        </Link>
        <div className='absolute left-0 top-full w-full md:relative py-4 bg-gray-100'>
          <div className='relative overflow-hidden grow xl:w-[458px] h-[45px] rounded-[3px]'>
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
      </div>
      <ul>
        <li className='hidden xl:flex items-center'>
          <HiPhone size={26} className='mr-2 text-secondary' />
          <p className='text-[13px] text-primary leading-tight'>
            <span className='block'>Kontaktná infolinka</span>
            <span>+420 776 766 373 (9:00 – 17:00)</span>
          </p>
        </li>
        <li>
          <Link href='/'>
            <HiOutlineHeart size={26} />
            <span className='hidden xl:block'>Obľúbené</span>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <HiOutlineUser size={26} />
            <span className='hidden xl:block'>Môj účet</span>
            <HiChevronDown size={18} className='hidden xl:block ml-2' />
          </Link>
        </li>
        <li className='flex items-center xl:hidden'>
          <button>
            <HiBars3 size={26} className='text-primary hover:text-slate-900' />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default TopNavigation
