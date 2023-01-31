import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="mb-20">
      <nav className="pb-4 mb-12 flex justify-between bg-orange-200 bg-gradient-to-r from-amber-600">
        <Image src="/../public/aclogo.png " height={90} width={90} alt="logo" />
        <ul className="flex items-center">
          <li>
            <Link href="/" className="text-red-700 font-bold">
              {' '}
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
