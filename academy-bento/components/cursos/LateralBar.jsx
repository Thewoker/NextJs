"use client"
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
import Link from 'next/link';
import { toast } from "react-toastify";
import { auth } from "@/firebase/config"
import { signOut } from "firebase/auth"
import { useRouter } from 'next/navigation';

function LateralBar() {
    const router = useRouter();

    const logout = () => {
        router.push('/');
        signOut(auth)
            .then(() => {
                console.log("Logout exitoso");
                toast.success("Usuario deslogueado correctamente.", {
                    hideProgressBar: true,
                });
            })
            .catch((error) => {
                toast.error(`Error al desloguearse. Error: \n${error}`, {
                    hideProgressBar: true,
                });
                console.log("Error al hacer logout:", error);
            });
    }

    return (
        <div className='w-[15%] flex flex-col justify-center items-center absolute top-0'>
            <h2 className='m-5 title'>
                <Link href='/'>FreshmanU</Link>
            </h2>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-row items-center gap-3 cursor-pointer'>
                    <CiHome className='text-white text-4xl' />
                    <p className='text-lateral'>Mi Perfil</p>
                </div>
                <div className='flex flex-row items-center gap-3 cursor-pointer'>
                    <CiSearch className='text-white text-4xl' />
                    <p className='text-lateral'>Mis Cursos</p>
                </div>
                <div className='flex flex-row items-center gap-3 cursor-pointer'>
                    <CiChat2 className='text-white text-4xl' />
                    <p className='text-lateral'>Consultas</p>
                </div>
                <div className='flex flex-row items-center gap-3 cursor-pointer'>
                    <CiShoppingCart className='text-white text-4xl' />
                    <p className='text-lateral'>Más Cursos</p>
                </div>
                <div className='flex flex-row items-center gap-3 cursor-pointer'>
                    <CiInboxOut className='text-white text-4xl' />
                    <p className='text-lateral'>Contáctanos</p>
                </div>
                <div className='flex flex-row items-center gap-3 cursor-pointer' onClick={() => logout()}>
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