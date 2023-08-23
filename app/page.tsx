import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import OnSaleSection from '../components/home/OnSaleSection'
import CategoriesSection from '@/components/home/CategoriesSection'
import RecommendationSection from '@/components/home/RecommendationSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import PopularBrandsSection from '@/components/home/PopularBrandsSection'

const Home: React.FC = () => {
  return (
    <>
      <section id='hero__banner' className='container mx-auto pb-[32px]'>
        <Image src='/images/hero.png' width={1260} height={357} alt='hero' />
      </section>
      <OnSaleSection />
      <CategoriesSection />
      <RecommendationSection />
      <NewsletterSection />
      <PopularBrandsSection />
    </>
  )
}

export default Home
