"use client"
import { HiMiniShoppingBag } from "react-icons/hi2";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { HiBars3 } from "react-icons/hi2";
import React from 'react'
import './header.css'
import Link from "next/link";

function Header() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["INICIO"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );


  return (
    <nav className='absolute grid min-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl2 top-0 title-header pt-8 mb-8 pl-5 pr-5 z-10'>
      <h3 className="fugaz"><Link href='/'>GYMTEAM</Link></h3>
      <ul className='flex text-base justify-center items-center tags-nav roboto gap-3 pointer center-items'>
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
      <ul className="flex gap-3 justify-end right-items">
        <div className="flex justify-center items-center sm:hidden">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize "
              >
                {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="INICIO" href="/"	>INICIO</DropdownItem>
              <DropdownItem key="TIENDA" href='/shop'>TIENDA</DropdownItem>
              <DropdownItem key="MI CUENTA" href="/">MI CUENTA</DropdownItem>
              <DropdownItem key="MI CARRITO" href="/">MI CARRITO</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <li><HiMiniShoppingBag /></li>
        <li><HiMiniShoppingCart /></li>
      </ul>
    </nav>
  )
}

export default Header