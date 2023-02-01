import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
      <nav className="pb-4 flex justify-between bg-[#e3cba3] bg-gradient-to-r from-[#b97c64] border-b-2 border-[#ac1010]">
        <Image src="/../public/aclogo.png " height={90} width={90} alt="logo" />
        <ul className="flex items-center">
          <li>
            <Link href="/" className="text-[#ac1010] font-bold">
              {' '}
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className='text-[#ac1010] font-bold'>
                About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
