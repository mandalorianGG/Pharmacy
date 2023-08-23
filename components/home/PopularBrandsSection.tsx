import brands from '@/constants/brands'
import Image from 'next/image'
import React from 'react'

const PopularBrandsSection = () => {
  return (
    <section id='popular__brands' className='text-center'>
      <h3 className='text-[18px] font-bold mb-[44px]'>Obľúbené značky</h3>
      <div className='brands'>
        {brands.map((brand) => (
          <Image
            src={brand.src}
            alt={brand.alt}
            width={brand.width}
            height={brand.height}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularBrandsSection
