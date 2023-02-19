import React from 'react'
import Image from 'next/image'
import { fit } from 'sharp'

const Testimonials = () => {
  return (
    <div className="flex flex-col mx-auto px-5">
      <div className="flex flex-row justify-center ">
        <div className="relative h-40 md:h-96 w-96  mr-5">
          <Image src="/stockfloor2seg1.jpeg" fill />
        </div>
        <div className="relative h-40 md:h-96 w-96 ">
          <Image src="/stockfloor2seg2.jpeg" fill />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
