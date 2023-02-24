import bg from './/../public/allstate-bg.png'
import Link from 'next/link'

const Welcome = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255, 0.5)'
      }}
      className="flex flex-col-reverse md:flex-row-reverse w-screen bg-cover md:justify-between lg:justify-around md:bg-center bg-left object-cover align-top justify-start"
    >
      <div className="my-10 mx-5 md:mb-80 bg-white bg-opacity-50 rounded-2xl flex flex-col align-top justify-start">
        <h1 className="font-bold text-xl text-[#ac1010] mt-4 ml-2 text-center">
          Commercial Services Provided
        </h1>
        <ul className="grid grid-cols-2 justify-between px-4 py-4 my-8 list-disc font-bold text-[#ac1010]">
          <li className="ml-2">Broadloom Carpet</li>
          <li className="ml-6">Broadloom over Pad</li>
          <li className="ml-2">Carpet Tile</li>
          <li className="ml-6">Luxury Vinyl Tile</li>
          <li className="ml-2">Vinyl Composition Tile</li>
          <li className="ml-6">Static Dissipative Tile</li>
          <li className="ml-2">Forbo Certified Installer</li>
          <li className="ml-6">Hardwood Refinishing</li>
          <li className="ml-2">Sheet Vinyl</li>
          <li className="ml-6">Sheet Welding</li>
          <li className="ml-2">Hardwood Floors</li>
        </ul>
      </div>
      <div className="my-20 mx-5 md:mb-96 flex flex-col justify-end">
        <div className="bg-white bg-opacity-50 rounded-2xl px-5 py-4">
          <h1 className="font-bold text-3xl text-[#ac1010] text-center pb-2">
            Welcome to Allstate Carpets
          </h1>
          <p className="max-w-lg font-bold text-[#ac1010] text-center">
            Let Us Floor You! Serving the commercial DMV area since 1971
          </p>
          <div className="flex flex-row justify-center mt-5 mb-5">
            <Link
              href="/contact"
              className="rounded p-2 font-bold text-[#e3cba3] bg-[#ac1010]"
            >
              Free Consultations
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
