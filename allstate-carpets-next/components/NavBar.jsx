import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <div className="flex text-white justify-between bg-orange-200 bg-gradient-to-r from-amber-600">
        <div>
        <Image src="/../public/aclogo.png" alt="logo" height={90} width={90}/>
        </div>
        <div>
        <Link href="/">Home</Link>
        </div>
    </div>
  )
}

export default NavBar