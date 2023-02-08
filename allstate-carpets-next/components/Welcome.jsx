import bg from './/../public/TransparentBG.png'

const Welcome = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,

        width: '100%'
        // height: '100%'
      }}
      className="flex flex-col md:flex-row-reverse w-screen bg-cover md:justify-between"
    >
      <div className="flex flex-col  bg-white rounded-2xl my-10 mx-5 bg-opacity-50 md:mt-80">
        <h1 className="font-bold text-center">Let Us Floor You</h1>
        <p className="text-center max-w-lg text-[#ac1010] ">
          Established in 1971, we are family owned business that has been
          providing outstanding flooring services to the Washington metropolitan
          area for over 50 years. In September of 1971, Allstate Building and
          Carpet Supplies, Inc. was established and moved into a warehouse space
          in Alexandria, VA. Carolyn Pizzano became the owner and ran the
          business from 1971-1983 when her daughter Lisa Paul graduated from St.
          Leo college and took over the family business. Now, Lisa and her son
          Jeremy continue to provide the DMV area with quality flooring
          products.
        </p>
      </div>
      <div className="md:mt-80 mx-3">
        <h1 className="font-bold text-3xl text-[#ac1010]">Services Provided</h1>
        <ul className="grid grid-cols-2 list-disc  font-bold text-[#ac1010] bg-white rounded-2xl bg-opacity-50  my-8 px-4 py-4 justify-between">
          <li className="ml-2">Broadloom Carpet</li>
          <li className="ml-5">Broadloom over Pad</li>
          <li className="ml-2">Carpet Tile</li>
          <li className="ml-5">Luxury Vinyl Tile</li>
          <li className="ml-2">Vinyl Composition Tile</li>
          <li className="ml-5">Static Dissipative Tile</li>
          <li className="ml-2">Forbo Certified Installer</li>
          <li className="ml-5">Hardwood Refinishing</li>
          <li className="ml-2">Sheet Vinyl</li>
          <li className="ml-5">Sheet Welding</li>
          <li className="ml-2">Hardwood Floors</li>
          <li className="ml-5">Free Estimates</li>
        </ul>
      </div>
    </div>
  )
}

export default Welcome
