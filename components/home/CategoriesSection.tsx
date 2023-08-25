import categories from '@/constants/categories';
import Image from 'next/image';
import Category from '../Category';

const CategoriesSection = () => {
  return (
    <section id='categories' className='bg-[#f8f8f8] pb-[28px]'>
      <div className='container mx-auto'>
        <div
          id='categories__banner'
          className='h-auto bg-slate-200 mb-[32px] flex items-center justify-center'
        >
          <Image
            src='/images/categories-banner.webp'
            alt='banner'
            width={1140}
            height={250}
            className='w-full h-auto'
          />
        </div>
        <div
          id='categories'
          className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[24px]'
        >
          {categories.map((category) => (
            <Category category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
