import { AiOutlineMail } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'

const Footer = () => {
  return (
    <ul className="flex flex-row justify-center  px-6 py-4 my-auto text-[#ac1010] border-t-2 border-[#80241b] w-screen">
      <li className="mx-2">
        <a href="mailto:jpaul@allstatecarpets.com" className="text-3xl">
          <AiOutlineMail />
        </a>
      </li>
      <li className="mx-2 my-auto font-bold">
        <a
          href="https://www.instagram.com/allstate_carpets/?hl=en"
          target="_blank"
          className="text-2xl"
        >
          <BsInstagram />
        </a>
      </li>
      <a href="tel:+1-703-549-6333" className="flex flex-row my-auto">
        <li className="my-auto">
          <AiFillPhone className="text-3xl" />
        </li>
        <li className="my-auto">
          <p className="font-bold">703-549-6333</p>
        </li>
      </a>
    </ul>
  )
}

export default Footer
