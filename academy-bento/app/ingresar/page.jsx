"use client"
import React from 'react'
import './ingresar.css'
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { auth, db } from "@/firebase/config"
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth"


function page() {
    const router = useRouter();
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    var [data, setData] = React.useState({
        email: "joedoe@freshmanu.com",
        password: ""
    });

    const loginUser = async (values) => {
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            console.log("Login exitoso");
            toast.success("Usuario Logueado correctamente.", {
                hideProgressBar: true,
            });
            router.push('/cursos');
        } catch (error) {
            toast.error(`El usuario no pudo loguearse correctamente. Error: \n${error}`, {
                hideProgressBar: true,
            });
            console.log("Error al iniciar sesión:", error);
            // Puedes agregar aquí el manejo de errores específico que desees
        }
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center relative'>
            <div className='flex flex-row w-full justify-center items-center h-[15%] absolute top-0 header-registro'><h2 className='titulo cursor-pointer' onClick={() => router.push('/')} >
                FreshmanU
            </h2></div>
            <div className="pt-[7%]">
                <div className='registro flex flex-col gap-3 '>
                    <h2 className='titulo-registro flex justify-center items-center m-3 '>
                        Accede a tu cuenta con tus datos
                    </h2>
                    <form action="" className='flex flex-col gap-3'>
                        <div className='flex justify-center items-center'>
                            <img src="" alt="" />
                            <Input
                                type="email"
                                isRequired={true}
                                fullWidth={true}
                                label="Email"
                                variant="bordered"
                                value={data.email}
                                defaultValue="joedoe@freshmanu.com"
                                className="max-w-xs"
                                onChange={e => setData({ ...data, email: e.target.value })}
                            />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="" alt="" />
                            <Input
                                label="Password"
                                isRequired={true}
                                fullWidth={true}
                                variant="bordered"
                                value={data.password}
                                placeholder="Enter your password"
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                        {isVisible ? (
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={isVisible ? "text" : "password"}
                                className="max-w-xs"
                                onChange={e => setData({ ...data, password: e.target.value })}
                            />
                        </div>
                        <div className='flex justify-center items-center pb-3'>
                            <Button className="flex justify-center items-center" color="primary" onClick={() => loginUser(data)} isDisabled={!data.email || !data.password || data.password.length < 8}>
                                Acceder
                            </Button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col justify-center items-center msg-registro m-2'><p className=''>¿Aún no tienes cuenta? <span onClick={() => router.push('/registro')} className='cursor-pointer underline hover:text-[#4f82e3]'>¡¡CRÉALA AQUÍ!!</span></p></div>
            </div>
        </div>
    )
}

export default page