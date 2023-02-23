import Image from 'next/image'
import { Inter } from '@next/font/google'
import './globals.css'
import Welcome from '@/components/Welcome'
import Carousel from '@/components/Carousel'
import Testimonials from '@/components/Testimonials'
import BrandCarousel from '@/components/BrandCarousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-[#e3cba3] bg-cover">
      <div>
        <Welcome />
        <Carousel />
      </div>
      <Testimonials />
      <BrandCarousel />
    </main>
  )
}
