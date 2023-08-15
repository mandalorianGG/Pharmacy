import Image from 'next/image'
import React from 'react'
import styles from '../styles/ProductSlide.module.css'

const ProductSlide = () => {
  return (
    <div className='h-full p-6 rounded shadow'>
      <figure>
        <div className={styles['product__slider__image__container']}>
          <Image
            src='/images/medicine.webp'
            height={100}
            width={150}
            alt='medicine'
          />
        </div>
        <figcaption className={styles['product__slider__image__caption']}>
          IMUNO vitamin (1×60 cps, výživový doplnok )
        </figcaption>
      </figure>
      <div className='grid grid-cols-2 mt-6'>
        <div>
          <p className={styles['product__slider__price']}>11.75 €</p>
          <p className={styles['product__slider__price__before']}>15.00 €</p>
          <p className={styles['product__slider__price__dph']}>
            10.75 € bez DPH
          </p>
          <div className='inline-block mt-2'>
            <div className='flex justify-center'>
              <button
                className={`${styles['product__slider__counter__button']} rounded-tl-sm rounded-bl-sm`}
              >
                +
              </button>
              <input
                className={styles['product__slider__counter__input']}
                type='text'
                placeholder='1'
                value={1}
              />
              <button
                className={`${styles['product__slider__counter__button']} rounded-tr-sm rounded-br-sm`}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <p className={styles['product__slider__stock']}>Skladom 6ks</p>
          <p className={styles['product__slider__stock']}>utorok 7.1. u vas</p>
          <button className={styles['product__slider__button']}>
            Do košíka
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductSlide
