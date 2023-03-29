import Image from 'next/image'
import bg from '../../public/aboutusbg.png'

const About = () => {
  return (
    <div
      id="aboutus-container"
      className="bg-[#e3cba3] flex flex-col h-fit md:h-screen align-middle justify-center"
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
            <p className="text-center max-w-lg text-[#ac1010] py-5 mx-5 font-bold">
              Allstate Carpets wants to floor you! We specialize in a wide
              variety of flooring and interior finishes: Carpet, Carpet Tile,
              Vinyl Flooring, Wood Flooring, Vinyl Base, Millwork Base, and
              Carpet cleaning services. From start to finish we will work
              closely with our client until they are 100% satisfied.
            </p>
          </div>
          <div className="flex-1 mb-1 rounded-xl shadow-xl md:ml-40  max-w-md justify-center align-middle text-center mx-auto bg-white bg-opacity-60 ">
            <h1 className="font-bold text-center max-w-lg text-[#80241b] pt-3 md:pl-13 ">
              About Allstate
            </h1>
            <p className="text-center max-w-lg text-[#ac1010] py-5 mx-5 font-bold">
              Established in 1971, we are a family owned business that has been
              providing outstanding flooring services to the Washington
              metropolitan area for over 50 years. In September of 1971,
              Allstate Building and Carpet Supplies, Inc. was established and
              moved into a warehouse space in Alexandria, VA. Allstate Carpets
              continue to provide the DMV area with quality flooring products.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:pl-10 max-w-md mx-auto">
          <div
            id="staff-photo-container"
            className="flex justify-center flex-row align-middle my-auto flex-1"
          >
            <div className="flex flex-col mt-2 mx-auto mr-5 md:mr-30">
              <div className="mx-auto">
                <Image
                  className="rounded-full shadow-2xl pt-1"
                  src="/LisaPaul.jpeg"
                  alt="picture1"
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-center font-bold text-[#80241b]">
                  Lisa Paul,
                </p>
                <p className="text-center font-bold text-[#80241b]">
                  President
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-2  mx-auto ml-5 md:ml-30 md:px-10">
              <div className="mx-auto">
                <Image
                  className="rounded-full shadow-2xl pt-1"
                  src="/Jeremy.jpeg"
                  alt="picture1"
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-center font-bold text-[#80241b]">
                  Jeremy Paul,
                </p>
                <p className="text-center font-bold text-[#80241b]">
                  Vice President
                </p>
              </div>
            </div>
          </div>
          <div
            id="staff-photo-container"
            className="flex justify-center flex-row align-middle my-auto flex-1 "
          >
            <div className="flex flex-col mt-2 mx-auto mr-5 md:mr-30">
              <div className="mx-auto">
                <Image
                  className="rounded-full shadow-2xl pt-1"
                  src="/Michael (1).jpeg"
                  alt="picture1"
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-center font-bold text-[#80241b]">
                  Michael Paul,
                </p>
                <p className="text-center font-bold text-[#80241b]">Flooring</p>
                <p className="text-center font-bold text-[#80241b]">
                  Consultant
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-2  mx-auto ml-5 md:ml-30 md:px-10">
              <div className="mx-auto">
                <Image
                  className="rounded-full shadow-2xl pt-1"
                  src="/Sheila (1).jpeg"
                  alt="picture1"
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-center font-bold text-[#80241b]">
                  Sheila Ward,
                </p>
                <p className="text-center font-bold text-[#80241b]">
                  Office Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
