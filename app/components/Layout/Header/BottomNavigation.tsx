import Link from 'next/link'
import React from 'react'
import { HiChevronDown } from 'react-icons/hi2'
import { AiOutlinePercentage } from 'react-icons/ai'

const BottomNavigation = () => {
  return (
    <ul id='bottom__navigation'>
      <li>
        <Link href='/'>
          <span>Vitamíny a minerály</span>
          <HiChevronDown size={18} />
        </Link>
      </li>
      <li>
        <Link href='/'>
          <span>Zdravá výživa a chudnutie</span>
          <HiChevronDown size={18} />
        </Link>
      </li>
      <li>
        <Link href='/'>
          <span>Doplnky stravy</span>
          <HiChevronDown size={18} />
        </Link>
      </li>
      <li>
        <Link href='/'>
          <span>Pre deti a mamičky</span>
          <HiChevronDown size={18} />
        </Link>
      </li>
      <li>
        <Link href='/'>
          <span>Krása a hygiena</span>
          <HiChevronDown size={18} />
        </Link>
      </li>
      <li>
        <Link href='/'>
          <span>Zdravotnícke potreby</span>
          <HiChevronDown size={18} />
        </Link>
      </li>
      <li className='sales__button'>
        <Link href='/'>
          <AiOutlinePercentage size={26} />
          <span>Akcie a výpredaj</span>
        </Link>
      </li>
    </ul>
  )
}

export default BottomNavigation
