import Link from 'next/link'
import React from 'react'
import { HiChevronDown } from 'react-icons/hi2'
import { AiOutlinePercentage } from 'react-icons/ai'

const BottomNavigation = () => {
  return (
    <ul
      id='bottom__navigation'
      className='container overflow-hidden mx-auto flex items-center gap-[20px] h-[46px] pl-[26px] rounded-[3px] bg-[#009432]'
    >
      <li className='text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Vitamíny a minerály</span>
          <HiChevronDown size={18} classname='text-white ml-2' />
        </Link>
      </li>
      <li className='text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Zdravá výživa a chudnutie</span>
          <HiChevronDown size={18} classname='text-white ml-2' />
        </Link>
      </li>
      <li className='text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Doplnky stravy</span>
          <HiChevronDown size={18} classname='text-white ml-2' />
        </Link>
      </li>
      <li className='text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Pre deti a mamičky</span>
          <HiChevronDown size={18} classname='text-white ml-2' />
        </Link>
      </li>
      <li className='text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Krása a hygiena</span>
          <HiChevronDown size={18} className='text-white ml-2' />
        </Link>
      </li>
      <li className='text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Zdravotnícke potreby</span>
          <HiChevronDown size={18} classname='text-white ml-2' />
        </Link>
      </li>
      <li className='h-full flex items-center justify-center grow bg-[#ffc312]'>
        <Link
          href='/'
          className='flex items-center gap-[6px] text-[14px] text-white font-semibold'
        >
          <AiOutlinePercentage size={26} />
          <span>Akcie a výpredaj</span>
        </Link>
      </li>
    </ul>
  )
}

export default BottomNavigation
