import Link from 'next/link'
import React from 'react'
import { HiChevronDown } from 'react-icons/hi2'

interface NavLinkProps {
  path: string
  text: string
}

const NavLink: React.FC<NavLinkProps> = ({ path, text }) => {
  return (
    <li>
      <Link href={path}>
        <span>{text}</span>
        <HiChevronDown size={18} />
      </Link>
    </li>
  )
}

export default NavLink
