import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
      <nav className="pb-4 flex justify-between bg-[#e3cba3] bg-gradient-to-r from-[#cc7c64] border-b-2 border-[#80241b]">
        <Link href="/">
        <Image src="/../public/aclogo.png " height={140} width={140} alt="logo" className='pl-10 pt-2'/>
        </Link>
        <ul className="flex items-center">
          <li>
            <Link href="/" className="text-[#ac1010] font-bold rounded p-2 hover:bg-[#a4614c]">
              {' '}
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className='text-[#ac1010] font-bold rounded p-2 hover:bg-[#a4614c]'>
                About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
