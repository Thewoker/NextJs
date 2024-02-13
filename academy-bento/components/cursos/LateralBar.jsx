import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiInboxOut } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiChat2 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSaveDown1 } from "react-icons/ci";
import { CiStickyNote } from "react-icons/ci";

function LateralBar() {
    return (
        <div className='w-[15%] flex flex-col justify-center items-center'>
            <h2 className='m-5 title'>FreshmanU</h2>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-row items-center gap-3'>
                    <CiHome className='text-white text-4xl' />
                    <p className='text-lateral'>Mi Perfil</p>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <CiSearch className='text-white text-4xl' />
                    <p className='text-lateral'>Mis Cursos</p>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <CiChat2 className='text-white text-4xl' />
                    <p className='text-lateral'>Consultas</p>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <CiShoppingCart className='text-white text-4xl' />
                    <p className='text-lateral'>Más Cursos</p>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <CiInboxOut className='text-white text-4xl' />
                    <p className='text-lateral'>Contáctanos</p>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <CiLogout className='text-white text-4xl' />
                    <p className='text-lateral'>Cerrar Sesión</p>
                </div>
            </div>
            <div className='flex flex-col code-container m-5 p-2'>
                <div className='flex flex-col justify-center items-center'>
                    <CiUser className='text-white text-2xl' />
                </div>
                <p className='code-text'>¡Comparte tu código con amigos y obtén cursos gratis!</p>
                <div className='flex flex-row justify-center items-center code-number-container m-2'><CiStickyNote className='text-white text-xl' /></div>
                <p className='code-text'>¡Con 5 amigos que se inscriban a cualquier curso con tu código ganarás un curso gratis!</p>
                <p className='code-text'>Para conocer más detalles ingresa aquí</p>
                <div className='flex flex-col justify-center items-center'>
                    <CiSaveDown1 className='text-white text-2xl' />
                </div>
                <div className='flex flex-col justify-center items-center '><p className='code-text code-button-end p-1'>Más detalles</p></div>
            </div>
        </div>
    )
}

export default LateralBar