import { HiMiniShoppingBag } from "react-icons/hi2";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import React from 'react'
import './header.css'

function Header() {
  return (
    <nav className='absolute grid min-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl2 top-0 title-header pt-8 mb-8 pl-5 pr-5'>
      <h3>GYMTEAM</h3>
      <ul className='flex text-base justify-center items-center tags-nav gap-3 pointer'>
        <li>
          <a href='#'>Volver</a>
        </li>
        <li>
          <a href='#'>Tienda</a>
        </li>
        <li>
          <a href='#'>Servicios</a>
        </li>
        <li>
          <a href='#'>Anuncios</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <ul className="flex gap-3 justify-end ">
        <li><HiMagnifyingGlass /></li>
        <li><HiMiniShoppingBag /></li>
        <li><HiMiniShoppingCart /></li>
      </ul>
    </nav>
  )
}

export default Header