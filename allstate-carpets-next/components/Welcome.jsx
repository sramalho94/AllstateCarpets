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
      className="flex flex-col-reverse md:flex-row-reverse w-screen bg-cover md:justify-between lg:justify-around md:bg-center bg-left object-cover"
    >
      <div className="flex flex-col  bg-white rounded-2xl my-10 mx-5 bg-opacity-50 md:mt-80">
        <h1 className="font-bold text-xl text-[#ac1010] mt-4 ml-2 text-center">
          Commercial Services Provided
        </h1>
        <ul className="grid grid-cols-2 list-disc  font-bold text-[#ac1010] my-8 px-4 py-4 justify-between">
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
      <div className="flex flex-col my-20 mx-5 md:mt-80 justify-end">
        <div className="bg-white rounded-2xl bg-opacity-50 px-5 py-4">
          <h1 className="font-bold text-center text-3xl text-[#ac1010] pb-2">
            Welcome to Allstate Carpets
          </h1>
          <p className="text-center max-w-lg text-[#ac1010] font-bold ">
            Let Us Floor You! Serving the commercial DMV area since 1971
          </p>
          <div className="flex flex-row justify-center mb-5 mt-5">
            <Link
              href="/contact"
              className="text-[#e3cba3] font-bold rounded p-2 bg-[#ac1010] "
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
