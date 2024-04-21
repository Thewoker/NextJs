import { HiMiniShoppingBag } from "react-icons/hi2";
import { HiMiniShoppingCart } from "react-icons/hi2";
import React from 'react'
import './header.css'
import Link from "next/link";

function Header() {
  return (
    <nav className='absolute grid min-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl2 top-0 title-header pt-8 mb-8 pl-5 pr-5 z-10'>
      <h3><Link href='/'>GYMTEAM</Link></h3>
      <ul className='flex text-base justify-center items-center tags-nav gap-3 pointer'>
        <li>
          <Link href='/'>Volver</Link>
        </li>
        <li>
          <a href='/shop'>Tienda</a>
        </li>
        <li>
          <a href='/#servicios'>Servicios</a>
        </li>
        <li>
          <a href='/#planes'>Planes</a>
        </li>
        <li>
          <a href='/#contact'>Contact</a>
        </li>
      </ul>
      <ul className="flex gap-3 justify-end ">
        <li><HiMiniShoppingBag /></li>
        <li><HiMiniShoppingCart /></li>
      </ul>
    </nav>
  )
}

export default Header