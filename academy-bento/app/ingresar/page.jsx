"use client"
import React, { useState } from 'react'
import './ingresar.css'
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { auth, db } from "@/firebase/config"
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";


function Page() {
    const router = useRouter();
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const { isOpen, onOpen, onClose } = useDisclosure();
    var [data, setData] = React.useState({
        email: "joedoe@freshmanu.com",
        password: ""
    });
    const [recovery, setRecovery] = useState({
        email: ""
    })

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

    const handleOpen = () => {
        onOpen();
    }

    const hadleClose = () => {
        onClose();
    }

    const handleChange = (e) => {
        setRecovery({
            ...recovery,
            [e?.target?.name]: e?.target?.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const auth = getAuth();
        sendPasswordResetEmail(auth, recovery.email)
            .then(() => {
                toast.success("Correo enviado.", {
                    hideProgressBar: true,
                });
            }).catch((error) => {
                toast.error(`Algo ha salido mal. Error: \n${error}`, {
                    hideProgressBar: true,
                });
                console.log("Algo ha salido mal:", error);
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };


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
                <div className='flex flex-col justify-center items-center msg-registro m-2'><p className=''>¿Olvidaste tu contraseña? <span onClick={() => handleOpen()} className='cursor-pointer underline hover:text-[#4f82e3]'>¡¡RECUPERALA AQUÍ!!</span></p></div>
                {/* Inicio Modal */}
                <Modal
                    size={'5xl'}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col justify-center items-center gap-1">Recuperar contraseña</ModalHeader>
                                <ModalBody>
                                    <form onSubmit={handleSubmit} className='my-12'>
                                        <label >E-Mail:</label>
                                        <input
                                            type="text"
                                            value={recovery?.email}
                                            required
                                            class="p-2 rounded w-full border-solid border-2 border-indigo-300 block my-4"
                                            name="email"
                                            onChange={handleChange}
                                        />

                                        <button onClick={() => hadleClose()} class="border border-solid border-2 border-indigo-300 p-2 rounded">Enviar</button>

                                    </form>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
                {/* Fin Mas Cursos */}
            </div>
        </div>
    )
}

export default Page