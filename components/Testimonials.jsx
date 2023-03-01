import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className="flex flex-col mx-auto px-5">
      <h1 className="text-4xl text-center font-bold pb-5 text-[#ac1010]">
        Testimonials
      </h1>
      <div className="flex flex-row justify-center pb-10">
        <div className="relative h-40 md:h-96 w-96  mr-5 max-h-md">
          <Image
            src="/Aveda3.jpeg"
            fill
            alt="floor1"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col relative h-40 md:h-96 w-96 overflow-x-auto justify-center ">
          <p className="whitespace-pre-wrap overflow-y-auto  text-center justify-center align-middle bg-[#ac1010] bg-opacity-80 font-bold shadow-xl rounded-xl p-5 text-[#e3cba3]">
            &rsquo;As a project manager, I&apos;ve worked with many flooring
            companies over the years, and Allstate Carpets is very responsive.
            They recently installed luxury vinyl tile and sheet vinyl on one of
            our recent projects, and the results were outstanding. The team was
            professional, efficient, and went above and beyond to ensure the
            project was completed on time and within budget. I highly recommend
            Allstate Carpets for all your commercial flooring needs.&rsquo;
            <br></br>
            <br></br>
            -Andrew Choi
            <br></br>
            Project Manger for Teel Construction
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center pb-10">
        <div className="flex flex-col relative h-40 md:h-96 w-96 overflow-x-auto justify-center mr-5">
          <p className="whitespace-pre-wrap overflow-y-auto  text-center justify-center align-middle bg-[#ac1010] bg-opacity-80 font-bold shadow-xl rounded-xl p-5 text-[#e3cba3]">
            &rsquo;We recently hired Allstate Carpets to install flooring in our
            office space and it was a great experience from start to finish. The
            team was knowledgeable, courteous, and completed the job with
            minimal disruption to our guests. The new carpet looks beautiful and
            has received many compliments. We will definitely be using Allstate
            Carpets for our future flooring projects.&rsquo;
            <br></br>
            <br></br>
            -Robert Starling
            <br></br>
            Senior Project Manager for Simpson Properties
          </p>
        </div>
        <div className="relative h-40 md:h-96 w-96 max-h-md">
          <Image src="/Loop1.jpeg" fill alt="floor2" className="object-cover" />
        </div>
      </div>
      <div className="flex flex-row justify-center pb-10">
        <div className="relative h-40 md:h-96 w-96  mr-5">
          <Image
            src="/Parsons4.jpeg"
            fill
            alt="floor3"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col relative h-40 md:h-96 w-96 overflow-x-auto justify-center ">
          <p className="whitespace-pre-wrap overflow-y-auto  text-center justify-center align-middle bg-[#ac1010] bg-opacity-80 font-bold shadow-xl rounded-xl p-5 text-[#e3cba3] md:h-96 md:flex md:flex-col md:justify-center">
            &rsquo;Allstate Carpets is one of our go-to flooring companies for
            our office buildouts. The team is always on time, professional, and
            provides us with great recommendations on the best flooring options
            for our needs. We couldn&apos;t be happier with the results and
            highly recommend Allstate Carpets.&rsquo;
            <br></br>
            <br></br>
            -Dave Hargrave
            <br></br>
            Estimator for Pizzano Contractors
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
