import React from 'react'
import Link from 'next/link'
import {
  HiChevronRight,
  HiHeart,
  HiOutlineHeart,
  HiOutlineUser,
  HiXMark,
} from 'react-icons/hi2'
import Image from 'next/image'

const SidebarNavigation = () => {
  return (
    <div className='fixed hidden inset-0 w-screen h-screen bg-gray-900/25'>
      <aside className='w-96 h-full bg-white'>
        <div className='flex justify-between p-6 bg-gray-100'>
          <Link href='/'>
            <Image src='apotheke.svg' width={99} height={25.5} alt='apotheke' />
          </Link>
          <button className='text-gray-400 hover:text-gray-800'>
            <HiXMark size={26} />
          </button>
        </div>
        <ul className='py-3'>
          <li className='flex justify-between px-6 py-4'>
            <Link
              href='/'
              className='flex items-center grow hover:text-secondary border-r'
            >
              Obľúbené
              <HiOutlineHeart size={22} className='ml-2' />
            </Link>
            <Link
              href='/'
              className='flex items-center justify-end grow hover:text-secondary'
            >
              Môj účet
              <HiOutlineUser size={22} className='ml-2' />
            </Link>
          </li>
          <li className='px-6 py-4 border-b'>
            <p>Infolinka:</p>
            <p>+420 776 766 373 (9:00 – 17:00)</p>
          </li>
          <li className='px-6 py-4 hover:text-secondary border-b'>
            <Link href='/' className='flex items-center justify-between'>
              Vitamíny a minerály
              <HiChevronRight size={18} />
            </Link>
          </li>
          <li className='px-6 py-4 hover:text-secondary border-b'>
            <Link href='/' className='flex items-center justify-between'>
              Zdravá výživa a chudnutie
              <HiChevronRight size={18} />
            </Link>
          </li>
          <li className='px-6 py-4 hover:text-secondary border-b'>
            <Link href='/' className='flex items-center justify-between'>
              Doplnky stravy
              <HiChevronRight size={18} />
            </Link>
          </li>
          <li className='px-6 py-4 hover:text-secondary border-b'>
            <Link href='/' className='flex items-center justify-between'>
              Pre deti a mamičky
              <HiChevronRight size={18} />
            </Link>
          </li>
          <li className='px-6 py-4 hover:text-secondary border-b'>
            <Link href='/' className='flex items-center justify-between'>
              Krása a hygiena
              <HiChevronRight size={18} />
            </Link>
          </li>
          <li className='px-6 py-4 hover:text-secondary border-b'>
            <Link href='/' className='flex items-center justify-between'>
              Zdravotnícke potreby
              <HiChevronRight size={18} />
            </Link>
          </li>
          <li className='px-6 py-4 hover:text-secondary border-b'>
            <Link href='/' className='flex items-center justify-between'>
              Akcie a Výpredaj
              <HiChevronRight size={18} />
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default SidebarNavigation
