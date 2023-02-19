import React from 'react'
import Image from 'next/image'
import { fit } from 'sharp'

const Testimonials = () => {
  return (
    <div className="flex flex-col mx-auto px-5">
      <div className="flex flex-row justify-center pb-10">
        <div className="relative h-40 md:h-96 w-96  mr-5">
          <Image src="/stockfloor2seg1.jpeg" fill alt="floor1" />
        </div>
        <div className="flex flex-col relative h-40 md:h-96 w-96 overflow-x-auto justify-center ">
          <p className="whitespace-pre-wrap overflow-y-auto  text-center justify-center align-middle bg-[#ac1010] bg-opacity-80 font-bold shadow-xl rounded-xl p-5 text-[#e3cba3]">
            "As a property manager, I've worked with many flooring companies
            over the years, and Allstate Carpets is by far the best. They
            recently installed luxury vinyl tile in one of my office buildings,
            and the results were outstanding. The team was professional,
            efficient, and went above and beyond to ensure the project was
            completed on time and within budget. I highly recommend Allstate
            Carpets for all your commercial flooring needs."
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center pb-10">
        <div className="flex flex-col relative h-40 md:h-96 w-96 overflow-x-auto justify-center mr-5">
          <p className="whitespace-pre-wrap overflow-y-auto  text-center justify-center align-middle bg-[#ac1010] bg-opacity-80 font-bold shadow-xl rounded-xl p-5 text-[#e3cba3]">
            "We recently hired Allstate Carpets to install broadloom carpet in
            our hotel's lobby and it was a great experience from start to
            finish. The team was knowledgeable, courteous, and completed the job
            with minimal disruption to our guests. The new carpet looks
            beautiful and has received many compliments. We will definitely be
            using Allstate Carpets for our future flooring projects."
          </p>
        </div>
        <div className="relative h-40 md:h-96 w-96 ">
          <Image src="/stockfloor2seg2.jpeg" fill alt="floor2" />
        </div>
      </div>
      <div className="flex flex-row justify-center pb-10">
        <div className="relative h-40 md:h-96 w-96  mr-5">
          <Image src="/stockfloor1.jpg" fill alt="floor3" />
        </div>
        <div className="flex flex-col relative h-40 md:h-96 w-96 overflow-x-auto justify-center ">
          <p className="whitespace-pre-wrap overflow-y-auto  text-center justify-center align-middle bg-[#ac1010] bg-opacity-80 font-bold shadow-xl rounded-xl p-5 text-[#e3cba3]">
            "Allstate Carpets is our go-to flooring company for our retail
            stores. They recently installed new sheet vinyl in one of our
            locations, and it was a seamless process from start to finish. The
            team was always on time, professional, and provided us with great
            recommendations on the best flooring options for our needs. We
            couldn't be happier with the results and highly recommend Allstate
            Carpets for all commercial flooring services."
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
