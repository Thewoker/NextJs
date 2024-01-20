import React from 'react'
import { Input } from "@nextui-org/react";
import Button from '@/components/ui/button/Button';
import "./register.css"
function page() {
    return (
        <div className='h-screen py-4 relative'>
            <a href="/">
                <Button content="Volver" height='48px' width='96px' />
            </a>
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='login-title'>Crea tu cuenta</h1>
                    <div className='h-[80vh] w-[40vw] bg-color p-7'>
                        <div className=''>
                            <div>
                                <p className='text-white text-sm'>Nombre</p>
                                <Input size='sm' radius='full' type="text" label="Ingresa tu correo electrónico" />
                            </div>
                            <div>
                                <p className='text-white text-sm m-0.5'>Apellido</p>
                                <Input size='sm' radius='full' type="text" label="Ingresa tu contraseña" />
                            </div>
                            <div>
                                <p className='text-white text-sm m-0.5'>Correo electrónico</p>
                                <Input size='sm' radius='full' type="email" label="Ingresa tu contraseña" />
                            </div>
                            <div>
                                <p className='text-white text-sm m-0.5'>Teléfono</p>
                                <Input size='sm' radius='full' type="text" label="Ingresa tu contraseña" />
                            </div>
                            <div>
                                <p className='text-white text-sm m-0.5'>Carrera</p>
                                <Input size='sm' radius='full' type="password" label="Ingresa tu contraseña" />
                            </div>
                            <div>
                                <p className='text-white text-sm m-0.5'>Contraseña</p>
                                <Input size='sm' radius='full' type="text" label="Ingresa tu contraseña" />
                            </div>
                            <div>
                                <p className='text-white text-sm m-0.5'>Repetir contraseña</p>
                                <Input size='sm' radius='full' type="password" label="Ingresa tu contraseña" />
                            </div>
                        </div>
                        <div className='flex justify-center items-center m-3'>
                            <Button content={"Iniciar Sesión"} height='48px' width='192px' />
                        </div>
                    </div>

                    <img src="/imgs/notebook.png" alt="" className='w-[15%] h-[15%] md:hiden' />
                </div>
            </div>
        </div>
    )
}

export default page