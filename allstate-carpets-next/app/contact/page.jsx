import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import bg from '../../public/contactus.jpeg'

const Contact = () => {
  return (
    <div
      id="contact-container"
      className="bg-[#e3cba3] flex flex-col-reverse h-screen  mx-auto align-middle w-screen md:justify-around "
    >
      <div
        className="bg-[#80241b] w-screen  mx-auto bg-cover md:h-80 align-bottom"
        style={{
          backgroundImage: `url(${bg.src})`,

          width: '100%'
          // height: '100%'
        }}
      ></div>
      <div className='flex flex-row justify-around'>
      <div className="flex flex-col  my-auto bg-white rounded-2xl bg-opacity-50 p-5">
        <h1 className="font-bold text-[#ac1010] text-3xl underline pb-5">
          Hours of Operation
        </h1>
        <div className="mx-auto flex flex-col">
          <div>
            <div className="flex flex-row my-auto justify-between">
              <h1 className="text-2xl pr-3 font-bold text-[#ac1010]">Sunday</h1>
              <p className=" font-bold text-[#ac1010]">Closed</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl pr-3 font-bold text-[#ac1010]">Monday</h1>
              <p className="my-auto font-bold text-[#ac1010]">
                7:00 AM - 5:00 PM
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl pr-3 font-bold text-[#ac1010]">
                Tuesday
              </h1>
              <p className="my-auto font-bold text-[#ac1010]">
                7:00 AM - 5:00 PM
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl pr-3 font-bold text-[#ac1010]">
                Wednesday
              </h1>
              <p className="my-auto font-bold text-[#ac1010]">
                7:00 AM - 5:00 PM
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl pr-3 font-bold text-[#ac1010]">
                Thursday
              </h1>
              <p className="my-auto font-bold text-[#ac1010]">
                7:00 AM - 5:00 PM
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl pr-3 font-bold text-[#ac1010]">Friday</h1>
              <p className="my-auto font-bold text-[#ac1010]">
                7:00 AM - 5:00 PM
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl pr-3 font-bold text-[#ac1010]">
                Saturday
              </h1>
              <p className="my-auto font-bold text-[#ac1010]">Closed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-2xl bg-opacity-50 px-5 py-5 my-auto">
        <p className="font-bold text-2xl text-[#ac1010] underline">
          Contact Info
        </p>
        <div className="flex flex-row font-bold text-[#ac1010]  pt-2">
          <a href="tel:+1-703-298-9046" className="flex flex-row my-auto">
            <AiFillPhone className="text-3xl mr-2" />
            <p className="font-bold text-[#ac1010] hover:text-[#0000FF] pt-2">
              For Free Estimate Call: 703-298-9046
            </p>
          </a>
        </div>
        <div className="flex flex-row font-bold text-[#ac1010]  pt-2">
          <a href="mailto:jpaul@allstatecarpets.com" className="text-3xl pr-2">
            <AiOutlineMail />
          </a>
          <p>jpaul@allstatecarpets.com</p>
        </div>
        <div className="flex flex-row font-bold text-[#ac1010]  pt-2">
          <a
            href="https://www.instagram.com/allstate_carpets/?hl=en"
            target="_blank"
            className="text-3xl pr-2"
          >
            <BsInstagram />
          </a>
          <p>@allstate_carpets</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
