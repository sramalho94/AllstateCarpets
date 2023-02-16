import Image from "next/image"
import { AiOutlineMail } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'

const Contact = () => {
  return (
    <div
      id="contact-container"
      className="bg-[#e3cba3] flex flex-col h-fit md:h-screen"
    >
      <div className="flex flex-col md:flex-row justify-around my-auto">
        <div>
          <h1>hello</h1>
        </div>
        <div className="flex flex-col bg-white rounded-2xl bg-opacity-50 px-5 py-5">
          <p className="font-bold text-2xl text-[#ac1010] underline">Contact Info</p>
          <div className="flex flex-row font-bold text-[#ac1010]  pt-2">
          <a href="tel:+1-703-298-9046" className="flex flex-row my-auto">
          <AiFillPhone className="text-3xl mr-2" />
          <p className="font-bold text-[#ac1010] hover:text-[#0000FF] pt-2">For Free Estimate Call: 703-298-9046</p>
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
              className="text-3xl pr-2">
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
