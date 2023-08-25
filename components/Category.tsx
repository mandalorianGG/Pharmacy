import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface categoryProps {
  category: {
    src: string;
    alt: string;
    title: string;
  };
}

const Category: FC<categoryProps> = ({ category }) => {
  return (
    <div className='relative'>
      <Image
        src={category.src}
        alt={category.alt}
        width={231}
        height={219}
        className='w-full h-auto'
      />
      <div className='absolute py-4 w-full bg-black/80 bottom-0 text-white text-center'>
        <p className='font-semibold text-lg mb-1'>{category.title}</p>
        <Link href='/' className='text-sm hover:underline'>
          zobraziť kategóriu
        </Link>
      </div>
    </div>
  );
};

export default Category;
