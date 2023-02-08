'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Carousel = () => {
  const slides = [
    {
      url: '/../public/Dispensery1.jpg'
    },
    {
      url: '/../public/Dispensery2.jpg'
    },
    {
      url: '/../public/pic3.jpeg'
    },
    {
      url: '/../public/Dispensery3.jpg'
    },
    {
      url: '/../public/Dispensery4.jpg'
    },
    {
      url: '/../public/pic4.jpeg'
    },
    {
      url: '/../public/pic5.jpeg'
    },
    {
      url: '/../public/pic6.jpeg'
    },
    {
      url: '/../public/pic7.jpeg'
    },
    {
      url: '/../public/Dispensery5.jpg'
    },
    {
      url: '/../public/Dispensery6.jpg'
    },
    {
      url: '/../public/pic9.jpeg'
    },
    {
      url: '/../public/pic10.jpeg'
    },
    {
      url: '/../public/pic11.jpeg'
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
    <div className="max-w-[1440px] h-[full] md:w-[780px] m-auto py-16 px-4 relative group">
      <h1 className="text-4xl font-bold text-center mb-7 text-[#ac1010]">
        Our Work
      </h1>
      <div className="w-full md:w-[780px] h-full rounded-2xl bg-center bg-cover duration-500">
        <Image
          alt="image1"
          width={400}
          height={400}
          src={`${slides[currentIndex].url}`}
          className="w-[780px] h-full rounded-2xl bg-center bg-cover duration-500"
        />
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
