import Link from 'next/link'
import React from 'react'
import { AiOutlinePercentage } from 'react-icons/ai'
import NavLink from './NavLink'
import { bottomNavLinks } from '@/app/constants/header'

const BottomNavigation = () => {
  return (
    <ul id='bottom__navigation'>
      {bottomNavLinks.map((link, key) => (
        <NavLink key={key} path={link.path} text={link.text} />
      ))}
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
