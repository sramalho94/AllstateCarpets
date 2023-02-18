import Image from 'next/image'
import bg from '../../public/aboutusbg.png'

const About = () => {
  return (
    <div
      id="aboutus-container"
      className="bg-[#e3cba3] flex flex-col h-fit md:h-screen"
    >
      <div
        className="bg-[#80241b] w-screen  mx-auto bg-cover h-40 md:h-80 mb-5"
        style={{
          backgroundImage: `url(${bg.src})`,

          width: '100%'
          // height: '100%'
        }}
      ></div>
      <div className="flex flex-col md:flex-row my-auto md:mr-10 ">
        <div className="mx-auto my-auto text-center ">
          <div className="flex-1 mb-5 rounded-xl shadow-xl md:ml-40 max-w-md justify-center align-middle text-center mx-auto bg-white bg-opacity-60 ">
            <h1 className="font-bold text-center max-w-lg text-[#80241b] pt-3 md:pl-13">
              Specialty
            </h1>
            <p className="text-center max-w-lg text-[#ac1010] py-5 mx-5">
              Allstate Carpets wants to floor you! We specialize in a wide
              variety of flooring and interior finishes: Carpet, Carpet Tile,
              Vinyl Flooring, Wood Flooring, Vinyl Base, Millwork Base, and
              Carpet cleaning services. From start to finish we will work
              closely with our client and until they are 100% satisfied.
            </p>
          </div>
          <div className="flex-1 mb-1 rounded-xl shadow-xl md:ml-40  max-w-md justify-center align-middle text-center mx-auto bg-white bg-opacity-60 ">
            <h1 className="font-bold text-center max-w-lg text-[#80241b] pt-3 md:pl-13">
              About Allstate
            </h1>
            <p className="text-center max-w-lg text-[#ac1010] py-5 mx-5">
              Established in 1971, we are family owned business that has been
              providing outstanding flooring services to the Washington
              metropolitan area for over 50 years. In September of 1971,
              Allstate Building and Carpet Supplies, Inc. was established and
              moved into a warehouse space in Alexandria, VA. In 1983, Lisa Paul
              took over the family business. Allstate Carpets continue to
              provide the DMV area with quality flooring products.
            </p>
          </div>
        </div>
        <div
          id="staff-photo-container"
          className="flex md:flex-col justify-center flex-row align-middle my-auto flex-1"
        >
          <div className="flex flex-col mt-2 p-2 my-auto">
            <div className="mx-auto">
              <Image
                className="rounded-full  shadow-2xl pt-1"
                src="/LisaPaul.jpeg"
                alt="picture1"
                width={120}
                height={120}
              />
            </div>
            <p className="text-center text-[#80241b] font-bold">
              Lisa Paul, President
            </p>
          </div>
          <div className="flex flex-col mt-2 p-2 mx-auto">
            <div className="mx-auto">
              <Image
                className="rounded-full shadow-2xl pt-1"
                src="/resizedjeremy.jpg"
                alt="picture1"
                width={120}
                height={120}
              />
            </div>
            <p className="text-center font-bold text-[#80241b]">
              Jeremy Paul, Vice President
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
