import React from 'react'
import Button from "@/components/ui/button/Button"
import { Input } from "@nextui-org/react";
import './rpassword.css'
function page() {
  return (
    <div className='h-screen py-4 relative'>
            <a href="/">
                <Button content="Volver" height='48px' width='96px' />
            </a>
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='login-title py-4'>Recupera tu contraseña</h1>
                    <div className='h-[43vh] w-[40vw] bg-color p-7'>
                        <div className='my'>
                            <p className='text-white text-md m-1'>Ingresa tu nueva contraseña</p>
                            <Input size='sm' radius='full' type="password" label="Ingresa tu correo electrónico" />
                            <p className='text-white text-md m-1'>Repite tu nueva contraseña</p>
                            <Input size='sm' radius='full' type="password" label="Ingresa tu contraseña" />
                        </div>
                        <div className='flex justify-center items-center m-5'>
                            <Button content={"Guardar"} height='48px' width='192px' />
                        </div>
                    </div>
                    <img src="/imgs/secure.png" alt="" className='w-[15%] h-[15%]'/>
                </div>
            </div>
        </div>
  )
}

export default page