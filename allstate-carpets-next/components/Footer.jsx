import { AiOutlineMail } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { TbCopyright } from 'react-icons/tb'
import Image from 'next/image'

const Footer = () => {
  return (
    <ul className="flex flex-row justify-center  px-6 py-4 my-auto bg-[#e3cba3] text-[#ac1010] border-t-2 border-[#80241b] w-screen bg-gradient-to-l from-[#a4614c]">
      <div className="flex flex-col my-auto">
        <div className="flex flex-row">
          <li className="mx-2 my-auto">
            <a href="mailto:jpaul@allstatecarpets.com" className="text-3xl ">
              <AiOutlineMail />
            </a>
          </li>
          <li className="mx-2 my-auto font-bold">
            <a
              href="https://www.instagram.com/allstate_carpets/?hl=en"
              target="_blank"
              rel="norefferer"
              className="text-2xl"
            >
              <BsInstagram />
            </a>
          </li>
          <a href="tel:+1-703-298-9046" className="flex flex-row my-auto">
            <li className="my-auto">
              <AiFillPhone className="text-3xl" />
            </li>
            <li className="my-auto">
              <p className="font-bold">703-298-9046</p>
            </li>
          </a>
        </div>
        <p className="flex flex-row mt-3">
          {' '}
          Copyright <TbCopyright /> 2023 AllState Building & Carpet Supplies
        </p>
      </div>
      <li>
        <Image
          src="/aclogo.png "
          height={110}
          width={110}
          alt="logo"
          className="pl-3 pt-2"
        />
      </li>
    </ul>
  )
}

export default Footer
