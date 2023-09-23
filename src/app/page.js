"use client"
import Menubar from '@/components/Home/Menubar'
import Product from '@/components/Home/Product'
import Slider from '@/components/Home/Slider'
 

export default function Home() {
  return (
    <main >
        <Menubar/>
        <Slider/>
        <Product/>
    </main>
  )
}
