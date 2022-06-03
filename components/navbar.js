import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-between flex-col items-center md:flex-row md:justify-start py-2'>
      <div className="logo mx-5">
        <Image src="/logo.png" alt="" height={40} width={200}/>
      </div>
      <div className="nav">
        <ul className='flex items-center font-bold space-x-2 md:text-md'>
          <Link href={"/hoodies"}><a><li>Hoodies</li></a></Link>
          <Link href={"/tshirts"}><a><li>T-Shirts</li></a></Link>
          <Link href={"/stickers"}><a><li>Stickers</li></a></Link>
          <Link href={"/mugs"}><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-0 mx-5 my-5">
        <AiOutlineShoppingCart className='text-xl md:text-3xl'/>
      </div>
    </div>
  )
}

export default Navbar