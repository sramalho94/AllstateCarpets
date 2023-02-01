import Image from "next/image"

const About = () => {
  return (
    <div id="aboutus-container" className="bg-[#e3cba3] flex flex-col">
    <div className="flex flex-col md:flex-row">
        <div className="flex-1 mb-1">
    <h1 className="font-bold text-center max-w-lg text-[#80241b] pt-10">Specialty</h1>
    <p className="text-center max-w-lg text-[#ac1010]">
    Allstate Carpets wants to floor you! We specialize in a wide variety of flooring and interior finishes: Carpet, Carpet Tile, Vinyl Flooring, Wood Flooring, Vinyl Base, Wood Base, Carpet cleaning services, and Window Treatments. From start to finish we will work closely with our client and till they are 100% satisfied.
    </p>
    <br></br>
    <h1 className="font-bold text-center max-w-lg text-[#80241b] pt-3">About Allstate</h1>
    <p className="text-center max-w-lg text-[#ac1010]">
    Established in 1971, we are family owned business that has been providing outstanding flooring services to the Washington metropolitan area for over 50 years. In September of 1971, Allstate Building and Carpet Supplies, Inc. was established and moved into a warehouse space in Alexandria, VA. Carolyn Pizzano became the owner and ran the business from 1971-1983 when her daughter Lisa Paul graduated from St. Leo college and took over the family business. Now, Lisa and her son Jeremy continue to provide the DMV area with quality flooring products. 
    </p>
    </div>
    <div
      id="staff-photo-container"
      className="flex flex-col justify-center md:flex-row align-middle my-auto flex-1"
    >
      <div className="flex flex-col mt-2 p-2">
        <Image
          className="rounded-full  shadow-2xl pt-1"
          src="/../public/LisaPaul.jpeg"
          alt="picture1"
          width={120} height={120}
        />
        <p>Lisa Paul, President</p>
      </div>
      <div className="flex flex-col mt-2 p-2">
        <Image 
          className="rounded-full shadow-2xl pt-1"
          src="/../public/JMP.jpeg"
          alt="picture1" width={160} height={160}
        />
        <p>Jeremy Paul, Vice President</p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default About