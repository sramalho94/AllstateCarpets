import Image from 'next/image'
import { Inter } from '@next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Welcome from '@/components/Welcome'
import Carousel from '@/components/Carousel'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-[#e3cba3] h-full">
      <div>
        <Welcome />
        <Carousel />
      </div>
      <div>testimonials</div>
      <Footer />
    </main>
  )
}
