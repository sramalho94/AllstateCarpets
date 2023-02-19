import React from 'react'
import Image from 'next/image'
import { fit } from 'sharp'

const Testimonials = () => {
  return (
    <div className="flex flex-col mx-auto px-5">
      <div className="flex flex-row justify-center pb-10">
        <div className="relative h-40 md:h-96 w-96  mr-5">
          <Image src="/stockfloor2seg1.jpeg" fill />
        </div>
        <div className="relative h-40 md:h-96 w-96 overflow-x-auto my-auto ">
          <p className="whitespace-pre-wrap overflow-y-auto  text-center justify-center align-middle">
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
        <div className="relative h-40 md:h-96 w-96 overflow-x-auto my-auto">
          <p className="whitespace-pre-wrap overflow-y-auto  text-center justify-center align-middle">
            "We recently hired Allstate Carpets to install broadloom carpet in
            our hotel's lobby and it was a great experience from start to
            finish. The team was knowledgeable, courteous, and completed the job
            with minimal disruption to our guests. The new carpet looks
            beautiful and has received many compliments. We will definitely be
            using Allstate Carpets for our future flooring projects."
          </p>
        </div>
        <div className="relative h-40 md:h-96 w-96 ">
          <Image src="/stockfloor2seg2.jpeg" fill />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
