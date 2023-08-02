import Link from 'next/link'
import React from 'react'

const BottomNavigation = () => {
  return (
    <ul
      id='bottom__navigation'
      className='container overflow-hidden mx-auto flex items-center h-[46px] pl-[26px] rounded-[3px] bg-[#009432]'
    >
      <li className='mr-[32px] text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Vitamíny a minerály</span>
          <span className='w-[12px] h-[6px] bg-white'></span>
        </Link>
      </li>
      <li className='mr-[32px] text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Zdravá výživa a chudnutie</span>
          <span className='w-[12px] h-[6px] bg-white'></span>
        </Link>
      </li>
      <li className='mr-[32px] text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Doplnky stravy</span>
          <span className='w-[12px] h-[6px] bg-white'></span>
        </Link>
      </li>
      <li className='mr-[32px] text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Pre deti a mamičky</span>
          <span className='w-[12px] h-[6px] bg-white'></span>
        </Link>
      </li>
      <li className='mr-[32px] text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Krása a hygiena</span>
          <span className='w-[12px] h-[6px] bg-white'></span>
        </Link>
      </li>
      <li className='mr-[32px] text-[14px] leading-[22px] tracking-[-0.14px] font-medium text-white'>
        <Link href='/' className='flex items-center gap-[8px]'>
          <span>Zdravotnícke potreby</span>
          <span className='w-[12px] h-[6px] bg-white'></span>
        </Link>
      </li>
      <li className='h-full flex items-center justify-center grow bg-[#ffc312]'>
        <Link href='/' className='text-[14px] text-white font-semibold'>
          Akcie a výpredaj
        </Link>
      </li>
    </ul>
  )
}

export default BottomNavigation
