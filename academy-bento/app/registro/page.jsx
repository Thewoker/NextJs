"use client"
import React from 'react'
import './registro.css'
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { auth, db } from "@/firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

function Page() {
    const router = useRouter();
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    var [data, setData] = React.useState({
        nombre: "Joe Doe",
        telefono: "562879565",
        carrera: "Ing. en Sistemas",
        email: "joedoe@freshmanu.com",
        password: "",
        avatarImg: ""
    });


    const createUser = async (values) => {
        try {
            console.log(values);
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const userCreds = userCredential.user;
            const res = await setDoc(doc(db, "usuarios", userCreds.uid), ({
                cursos: [],
                nombre: data.nombre,
                telefono: data.telefono,
                carrera: data.carrera,
                email: data.email,
                password: data.password,
                avatarImg: ""
            }));
            toast.success("Usuario creado correctamente.", {
                hideProgressBar: true,
            });
            router.push('/ingresar');
        } catch (error) {
            toast.error(`El usuario no fue creado correctamente. Error: \n${error}`, {
                hideProgressBar: true,
            });
            console.log("Error al crear el usuario:", error);
            // Puedes agregar aquí el manejo de errores específico que desees
        }
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center relative'>
            <div className='flex flex-row w-full justify-center items-center h-[15%] absolute top-0 header-registro'><h2 className='titulo cursor-pointer' onClick={() => router.push('/')}>
                FreshmanU
            </h2></div>
            <div className="pt-[7%]">
                <div className='registro flex flex-col gap-3 '>
                    <h2 className='titulo-registro flex justify-center items-center m-3 '>
                        Completa los datos para crear tu cuenta
                    </h2>
                    <form action="" className='flex flex-col gap-3'>
                        <div className='flex justify-center items-center'>
                            <img src="" alt="" />
                            <Input
                                type="text"
                                isRequired={true}
                                fullWidth={true}
                                label="Nombre"
                                variant="bordered"
                                value={data.nombre}
                                defaultValue="Joe Doe"
                                className="max-w-xs"
                                onChange={e => setData({ ...data, nombre: e.target.value })}
                            />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="" alt="" />
                            <Input
                                type="text"
                                isRequired={true}
                                fullWidth={true}
                                label="Telefono"
                                variant="bordered"
                                value={data.telefono}
                                defaultValue="562879565"
                                className="max-w-xs"
                                onChange={e => setData({ ...data, telefono: e.target.value })}
                            />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="" alt="" />
                            <Input
                                type="text"
                                isRequired={true}
                                fullWidth={true}
                                label="Carrera"
                                variant="bordered"
                                value={data.carrera}
                                defaultValue="Ing. en Sistemas"
                                className="max-w-xs"
                                onChange={e => setData({ ...data, carrera: e.target.value })}
                            />
                        </div>
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
                            <Button className="flex justify-center items-center" color="primary" onClick={() => createUser(data)} isDisabled={!data.nombre || !data.telefono || !data.carrera || !data.email || !data.password || data.password.length < 8}>
                                Registrarse
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page