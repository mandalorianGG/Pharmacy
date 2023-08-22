'use client'

import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import ProductSlide from './ProductSlide'

const KeenSliderComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    initial: 0,
    slides: {
      perView: 1,
      spacing: 0,
    },
    breakpoints: {
      '(min-width: 480px)': {
        slides: {
          perView: 1,
          spacing: 0,
        },
      },
      '(min-width: 640px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      '(min-width: 900px)': {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      '(min-width: 1280px)': {
        slides: {
          perView: 4,
          spacing: 20,
        },
      },
    },
    slideChanged(slider) {
      const currentInstance = instanceRef.current
      if (currentInstance) {
        const perView: number = currentInstance.options.slides?.perView
        if (perView !== undefined) {
          setCurrentSlide(slider.track.details.rel / perView)
        }
      }
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div>
      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
        <div className='keen-slider__slide p-1'>
          <ProductSlide />
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className='slider__dots flex items-center justify-center gap-[10px] mt-[24px]'>
          {[
            ...Array(
              Math.ceil(
                instanceRef.current.track.details.slides.length /
                  instanceRef.current?.options.slides?.perView
              )
            ).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(
                    idx * instanceRef.current?.options.slides?.perView
                  )
                }}
                className={
                  'w-[16px] h-[16px] rounded-full' +
                  (currentSlide === idx
                    ? ' bg-[#191919]'
                    : '' + ' bg-[#c4c4c4]')
                }
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default KeenSliderComponent
