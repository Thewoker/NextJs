"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import "./perfil.css"
import LateralBar from '@/components/cursos/LateralBar'
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { useAuthContext } from '@/contexts/AuthContext'
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase/config"
import { updatePassword, getAuth } from "firebase/auth";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { toast } from 'react-toastify';
import {Button} from "@nextui-org/react";



function Page() {
    const { user } = useAuthContext()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [passwordvisibility, setPasswordvisibility] = useState(false);
    const [data, setData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        carrera: "",
        password: "",
        avatarImg: ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e?.target?.name]: e?.target?.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificar si el documento existe antes de actualizarlo
        const userDocRef = doc(db, 'usuarios', user.uid);
        const usertDocSnap = await getDoc(userDocRef);

        if (usertDocSnap.exists()) {
            // Actualizar los datos del producto actual en la base de datos
            await updateDoc(userDocRef, data);
            updateUserPassword()
        } else {
            console.error('El documento no existe');
        }

    };

    const updateUserPassword = () => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        updatePassword(usuario, data.password).then(() => {
            toast.success("Datos actualizados correctamente.", {
                hideProgressBar: true,
            });
        }).catch((error) => {
            toast.error(`Ha habido un error en el cambio de la contraseña. Error: \n${error}`, {
                hideProgressBar: true,
            });
            console.log("Error al iniciar sesión:", error);
        });
    };

    useEffect(() => {
        if (db && user && user.uid) {
            const fetchData = async () => {
                const docRef = doc(db, "usuarios", user.uid);
                const docSnap = await getDoc(docRef);
                const docData = await docSnap.data()

                if (docSnap.exists()) {
                    setData({
                        nombre: docData.nombre,
                        email: docData.email,
                        telefono: docData.telefono,
                        carrera: docData.carrera,
                        password: docData.password,
                        avatarImg: docData.avatarImg
                    });
                } else {
                    console.log("No such document!");
                }
            }
            fetchData();
        } else {
            console.log("DB reference no exist or user is not defined");
        }

    }, [user]);

    const handleOpen = () => {
        onOpen();
    }

    const hadleClose = () => {
        onClose();
    }

    console.log(data);
    return (
        <div className="flex flex-row relative">
            <div className='w-[15%] flex flex-col justify-center items-center'>
                <LateralBar />
            </div>
            <div className='w-[85%] m-0 p-0'>
                <div className='h-[10%] barra-sup relative'>
                    <p className='absolute titles-main absolute-center'>Mi Perfil</p>
                </div>
                <div className='min-h-screen bg-[#263159] flex flex-col justify-center items-center'>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="flex justify-center items-center relative m-5 mb-2">
                            <Avatar src={data.avatarImg} name={data.nombre} className="w-[141px] h-[141px] text-[50px]" />
                            <button onClick={() => handleOpen()} className="w-[44px] h-[44px] bg-black flex justify-center items-center rounded-full absolute right-0 bottom-0">
                                <img className="w-[26px] h-[26px]" src="https://firebasestorage.googleapis.com/v0/b/elias-academy-bfa77.appspot.com/o/portadaInterrogaciones%2Fe499ed7fddd9a419dd8db215dd5c7f56.png?alt=media&token=db4de4eb-f801-4141-bcd8-5b01c8ee462a" />
                            </button>
                        </div>
                        <p className="titulo-perfil">{data.nombre}</p>
                        <div className='flex flex-col justify-center items-center gap-8 w-[84%] m-5 mt-2'>
                            <div className='flex flex-row justify-between items-center mod'>
                                <p className="inf-per">Información personal</p>
                                <Button color="default" onClick={() => handleOpen()}>Modificar Datos</Button>
                            </div>
                            <div className='flex flex-col justify-center items-start p-[5%] notes'>
                                <p className="pag-data">Nombre y Apellido</p>
                                <p className="user-data">{data.nombre}</p>
                            </div>
                            <div className='flex flex-col justify-center items-start p-[5%] notes'>
                                <p className="pag-data">Correo electrónico</p>
                                <p className="user-data">{data.email}</p>
                            </div>
                            <div className='flex flex-col justify-center items-start p-[5%] notes'>
                                <p className="pag-data">Número telefónico</p>
                                <p className="user-data">{data.telefono}</p>
                            </div>
                            <div className='flex flex-col justify-center items-start p-[5%] notes'>
                                <p className="pag-data">Carrera</p>
                                <p className="user-data">{data.carrera}</p>
                            </div>
                            <div className='flex flex-col justify-center items-start notes p-[5%]'>
                                <p className="pag-data ">Contraseña</p>
                                <p className="user-data">{data.password}</p>
                            </div>
                        </div>
                    </div>

                    {/* Inicio Modal */}
                    <Modal
                        size={'5xl'}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col justify-center items-center gap-1">Datos</ModalHeader>
                                    <ModalBody>
                                        <form onSubmit={handleSubmit} className='my-12'>
                                            <label >Nombre:</label>
                                            <input
                                                type="text"
                                                value={data?.nombre}
                                                required
                                                className='p-2 rounded w-full border border-blue-100 block my-4'
                                                name='nombre'
                                                onChange={handleChange}
                                            />

                                            <label >E-Mail:</label>
                                            <input
                                                type="text"
                                                value={data?.email}
                                                required
                                                className='p-2 rounded w-full border border-blue-100 block my-4'
                                                name='email'
                                                onChange={handleChange}
                                            />
                                            <label >Telefono:</label>
                                            <textarea
                                                value={data?.telefono}
                                                className='resize-none p-2 rounded w-full border border-blue-100 block my-4'
                                                name='telefono'
                                                onChange={handleChange}
                                            />

                                            <label >Carrera:</label>
                                            <input
                                                type="text"
                                                value={data?.carrera}
                                                required
                                                className='p-2 rounded w-full border border-blue-100 block my-4'
                                                name='carrera'
                                                onChange={handleChange}
                                            />

                                            <label >Contraseña:</label>
                                            <div className='flex flex-row'>
                                                <input
                                                    type={passwordvisibility ? 'text' : 'password'}
                                                    value={data?.password}
                                                    required
                                                    className='p-2 rounded w-full border border-blue-100 block my-4'
                                                    name='password'
                                                    onChange={handleChange}
                                                />
                                                <button className="focus:outline-none" type="button" onClick={() => { passwordvisibility ? setPasswordvisibility(false) : setPasswordvisibility(true) }}>
                                                    {passwordvisibility ? (
                                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                    ) : (
                                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                    )}
                                                </button>
                                            </div>

                                            <label >URL Imagen Perfil:</label>
                                            <input
                                                type="text"
                                                value={data?.avatarImg}
                                                required
                                                className='p-2 rounded w-full border border-blue-100 block my-4'
                                                name='avatarImg'
                                                onChange={handleChange}
                                            />

                                            <button onClick={() => onClose()} className="border border-solid border-2 border-indigo-300 p-2 rounded" type="submit">Enviar</button>
                                        </form>
                                    </ModalBody>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                    {/* Fin Mas Cursos */}
                </div>
            </div>
        </div>
    )
}

export default Page