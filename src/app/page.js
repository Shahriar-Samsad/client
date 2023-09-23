"use client"
import BLog from '@/components/Home/BLog'
import FeedBack from '@/components/Home/FeedBack'
import Menubar from '@/components/Home/Menubar'
import PremiumMango from '@/components/Home/PremiumMango'
import Product from '@/components/Home/Product'
import Service from '@/components/Home/Service'
import Slider from '@/components/Home/Slider'
 

export default function Home() {
  return (
    <main >
        <Menubar/>
        <Slider/>
        <Product/>
        <PremiumMango/>
        <Service/>
        <BLog/>
        <FeedBack/>
    </main>
  )
}
