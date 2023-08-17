import Link from 'next/link'
import React from 'react'
import { HiChevronRight } from 'react-icons/hi2'

interface SideNavLinkProps {
  path: string
  text: string
}

const SideNavLink: React.FC<SideNavLinkProps> = ({ path, text }) => {
  return (
    <li className='px-6 py-4 hover:text-secondary border-b'>
      <Link href={path} className='flex items-center justify-between'>
        <span>{text}</span>
        <HiChevronRight size={18} />
      </Link>
    </li>
  )
}

export default SideNavLink
