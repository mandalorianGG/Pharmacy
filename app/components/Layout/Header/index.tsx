import React from 'react'
import TopNavigation from './TopNavigation'
import BottomNavigation from './BottomNavigation'
import SidebarNavigation from '../SidebarNavigation'

const Header = () => {
  return (
    <header className='pt-5 xl:pt-[40px] min-h-[148px] md:min-h-[0px] pb-[30px] bg-gray-100'>
      <TopNavigation />
      <BottomNavigation />
      <SidebarNavigation />
    </header>
  )
}

export default Header
