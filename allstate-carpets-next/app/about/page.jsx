import Image from "next/image"

const About = () => {
  return (
    <div id="aboutus-container" className="mt-5">
    <h1 className="font-bold">About Allstate Carpets</h1>
    <p id="aboutus-text">
    Allstate Carpets wants to floor you! We specialize in a wide variety of flooring and interior finishes: Carpet, Carpet Tile, Vinyl Flooring, Wood Flooring, Vinyl Base, Wood Base, Carpet cleaning services, and Window Treatments. From start to finish we will work closely with our client and till they are 100% satisfied.
    </p>

    <p>
    Established in 1971, we are family owned business that has been providing outstanding flooring services to the Washington metropolitan area for over 50 years. Bob Pizzano Sr attended a funeral in Dalton, GA where he met all of his wife's family members who were involved in the flooring business. When he returned home he started ordering all the carpet for his construction business and had it shipped to his home in Falls Church, VA. In September of 1971, Allstate Building and Carpet Supplies, Inc. was established and moved into a warehouse space in Alexandria, VA. Carolyn Pizzano became the owner and ran the business from 1971-1983 when her daughter Lisa Paul graduated from St. Leo college and took over the family business. Now, Lisa and her son Jeremy continue to provide the DMV area with quality flooring products. 
    </p>
    <div
      id="staff-photo-container"
      className="flex flex-col justify-center md:flex-row "
    >
      <div className="flex flex-col-reverse mt-2 p-2">
        <Image
          className="rounded-full  shadow-2xl pt-1"
          src="/../public/LisaPaul.jpeg"
          alt="picture1"
          width={120} height={120}
        />
        <p>Lisa Paul, President</p>
      </div>
      <div className="flex flex-col-reverse mt-2 p-2">
        <Image 
          className="rounded-full shadow-2xl pt-1"
          src="/../public/JMP.jpeg"
          alt="picture1" width={160} height={140}
        />
        <p>Jeremy Paul, Vice President</p>
      </div>
    </div>
  </div>
  )
}

export default About