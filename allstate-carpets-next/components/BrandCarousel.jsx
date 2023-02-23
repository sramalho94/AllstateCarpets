'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useSwipeable } from 'react-swipeable'

const BrandCarousel = () => {
  const slides = [
    {
      url: '/Pizzano.png'
    },
    {
      url: '/HBW.png'
    },
    {
      url: '/Patner.png'
    },
    {
      url: '/Range.png'
    },
    {
      url: '/JLL.png'
    },
    {
      url: '/Teel.png'
    },
    { 
      url: '/Penzance.png'
    },
    {
      url: '/Simpson.png'
    },
    {
      url: '/MetroMGMT.png'
    },
    {
      url: '/Jstreet.png'
    },
    {
      url: '/Boland.png'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="max-w-[1440px] h-[full] md:w-[780px] m-auto py-16 px-4 relative group ">
      <h1 className="text-4xl font-bold text-center mb-2 text-[#ac1010]">
        Partners
      </h1>

      <div
        className="w-full md:w-[780px] h-full rounded-2xl bg-center bg-cover duration-500 bg-white px-10 py-5"
        id="1"
        {...useSwipeable({
          onSwipedLeft: () => nextSlide(),
          onSwipedRight: () => prevSlide()
        })}
      >
        <Image
          alt="image1"
          width={400}
          height={400}
          src={`${slides[currentIndex].url}`}
          className="w-[100px] h-[60px] rounded-2xl bg-center bg-cover duration-500"
        />
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={10} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={10} onClick={nextSlide} />
        </div>
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandCarousel
