import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 mx-10 py-10 h-40">
      <div
        className="mx-auto h-1/3 col-span-1
      "
      >
        <Image
          src="/stockfloor2seg1.jpeg"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <div
        className="mx-auto h-1/3 col-span-1
      "
      >
        <Image
          src="/stockfloor2seg2.jpeg"
          width={120}
          height={120}
          className="h-fit w-fit"
        />
      </div>
      <div
        className="mx-auto h-1/3 col-span-1
      "
      >
        3
      </div>
      <div
        className="mx-auto h-1/3 col-span-1
      "
      >
        4
      </div>
      <div
        className="mx-auto h-1/3 col-span-1
      "
      >
        5
      </div>
      <div
        className="mx-auto h-1/3 col-span-1
      "
      >
        6
      </div>
    </div>
  )
}

export default Testimonials
