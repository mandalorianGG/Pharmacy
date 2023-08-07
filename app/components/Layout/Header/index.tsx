import React from 'react'
import TopNavigation from './TopNavigation'
import BottomNavigation from './BottomNavigation'
import SidebarNavigation from '../SidebarNavigation'

const Header = () => {
  return (
    <header className='pt-[40px] pb-[30px] bg-[#f8f8f8]'>
      <TopNavigation />
      <BottomNavigation />
      <SidebarNavigation />
    </header>
  )
}

export default Header
