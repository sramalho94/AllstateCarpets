import Image from "next/image"

const About = () => {
  return (
    <div id="aboutus-container" className="mt-5">
    <h1 className="font-bold">About Allstate Carpets</h1>
    <p id="aboutus-text">
      In addition to providing the finest carpets, installation, and carpet care
      for individuals and homeowners, Tyson Floors also provides the same
      quality products and service for large commercial institutions. Our
      company has graced large projects such as schools, hospitals, nursing
      homes, airports, and government buildings.
    </p>

    <p>
      Our carpet care facility rivals the finest in the United States because we
      know the products, we know how they should be cared for, and we know how
      your selection should perform given your unique environment. With this
      knowledge, as well as decades of experience, Tyson Floors is dedicated to
      creating the perfect environment for you, your home, your business, and
      your life.
    </p>
    <div
      id="staff-photo-container"
      className="flex flex-col justify-center md:flex-row "
    >
      <div className="flex flex-col-reverse mt-2 p-2">
        <Image
          className="rounded-full  shadow-2xl pt-1"
          src="/../public/jeremypic.jpeg"
          alt="picture1"
          width={90} height={90}
        />
        <p>Jeremy Paul, Vice President</p>
      </div>
      <div className="flex flex-col-reverse mt-2 p-2">
        <Image 
          className="rounded-full shadow-2xl pt-1"
          src="/../public/jeremypic.jpeg"
          alt="picture1" width={90} height={90}
        />
        <p>Jeremy Paul, Vice President</p>
      </div>
    </div>
  </div>
  )
}

export default About