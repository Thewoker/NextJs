import React from 'react'
import { Input } from "@nextui-org/react";
import Button from '@/components/ui/button/Button';
import './login.css'
import { Courses } from '@/components/main-page/courses-main-page/Courses';
function page() {
    return (
        <div className='h-screen py-4 relative'>
            <a href="/">
                <Button content="Volver" height='48px' width='96px' />
            </a>
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='login-title py-4'>Iniciar Sesión</h1>
                    <div className='h-[43vh] w-[40vw] bg-color p-7'>
                        <div className='my'>
                            <p className='text-white text-md m-1'>Correo electrónico</p>
                            <Input size='sm' radius='full' type="email" label="Ingresa tu correo electrónico" />
                            <p className='text-white text-md m-1'>Contraseña</p>
                            <Input size='sm' radius='full' type="password" label="Ingresa tu contraseña" />
                        </div>
                        <div className='flex justify-center items-center m-5'>
                            <Button content={"Iniciar Sesión"} height='48px' width='192px' />
                        </div>
                        <a href='/Register' className='flex justify-center items-center m-5 text-white'>
                            ¿Aun no estas registrado? Registrate.
                        </a>
                    </div>
                    <h2 className='login-title py-5'>¿Olvidaste tu contraseña?</h2>
                    <a className='flex justify-center items-center m-10' href='/login/recover-password'>
                            <Button content={"Recuperar contraseña"} height='48px' width='308px' />
                        </a>
                    <img src="/imgs/key.png" alt="" className='w-[15%] h-[15%]'/>
                </div>
            </div>
        </div>
    )
}

export default page