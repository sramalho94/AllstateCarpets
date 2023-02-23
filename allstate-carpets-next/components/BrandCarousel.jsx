'use client'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const images = [
  '/Pizzano.png',
  '/HBW.png',
  '/Patner.png',
  '/Range.png',
  '/JLL.png',
  '/Teel.png',
  '/Penzance.png',
  '/Simpson.png',
  '/MetroMGMT.png',
  '/Jstreet.png',
  '/Boland.png'
]

const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  }

  return (
    <div className="w-full bg-white bg-opacity-50 py-3">
      <h1 className="text-3xl md:text-4xl font-bold text-[#ac1010] text-center pb-3">
        Our Clients
      </h1>
      <div className="w-1/2 my-auto mx-auto ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              className=" flex flex-row  my-auto justify-center align-middle relative h-11 w-22 md:h-24 md:w-30"
              key={index}
            >
              {' '}
              <Image
                src={image}
                alt={`gallery-image-${index}`}
                fill
                className="pl-3 pr-1"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default BrandCarousel
