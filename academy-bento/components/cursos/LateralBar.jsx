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
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import CursoBuy from '@/components/cursos/CursoBuy'
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase/config"
import { useAuthContext } from "@/contexts/AuthContext"



const getCourses = async () => {
    try {
        const cursoRef = collection(db, 'cursos');
        const cursoQuery = await getDocs(cursoRef);
        const allCourses = cursoQuery.docs?.map(docSnapshot => docSnapshot.data());

        return allCourses;
    } catch (error) {
        console.error('Error in getCourses:', error);
    }
}

function LateralBar() {
    const { user } = useAuthContext();
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('5xl')
    const [courses, setCourses] = React.useState([]);

    const copyUid = () => {
        navigator.clipboard.writeText(user.uid)
            .then(() => {
                toast.success("Codigo copiado al portapapeles.", {
                    hideProgressBar: true,
                });
            })
            .catch((error) => {
                toast.error(`Error al copiar UID. Error: \n${error}`, {
                    hideProgressBar: true,
                });
                console.log("Error al copiar UID:", error);
            });
    }

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

    React.useEffect(() => {
        try {
            const fetchCourses = async () => {
                const fetchedCourses = await getCourses();
                setCourses(fetchedCourses);
            };
            fetchCourses();
        } catch (e) {
            console.log(e);
        }
    }, []);

    const handleOpen = () => {
        onOpen();
    }

    const hadleClose = () => {
        onClose();
    }

    return (
        <div className='w-[15%] flex flex-col justify-center items-center absolute top-0'>
            <h2 className='m-5 title'>
                <Link href='/'>FreshmanU</Link>
            </h2>
            <div className='flex flex-col gap-8'>
                <Link href='/perfil' className='flex flex-row items-center gap-3 cursor-pointer'>
                    <CiHome className='text-white text-4xl' />
                    <p className='text-lateral'>Mi Perfil</p>
                </Link>
                <Link href='/cursos' className='flex flex-row items-center gap-3 cursor-pointer'>
                    <CiSearch className='text-white text-4xl' />
                    <p className='text-lateral'>Mis Cursos</p>
                </Link>
                <a href="mailto:freshmanuweb@gmail.com" className='flex flex-row items-center gap-3 cursor-pointer'>
                    <CiChat2 className='text-white text-4xl' />
                    <p className='text-lateral'>Consultas</p>
                </a>
                <button onClick={() => handleOpen()} className='flex flex-row items-center gap-3 cursor-pointer'>
                    <CiShoppingCart className='text-white text-4xl' />
                    <p className='text-lateral'>Más Cursos</p>
                </button>
                {/* Inicio Modal */}
                <Modal
                        size={size}
                        isOpen={isOpen}
                        onClose={onClose}
                        scrollBehavior="inside"
                        maxH="80vh"
                    >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col justify-center items-center gap-1">¡¡Accede a los mejores cursos aqui!!</ModalHeader>
                                    <ModalBody>
                                        <div className='flex flex-row justify-center items-center flex-wrap gap-10 p-10'>
                                            {courses?.map(course => <CursoBuy key={course.slug} course={course}/>)}
                                        </div>
                                    </ModalBody>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                {/* Fin Mas Cursos */}
                <Link href='/#contact' className='flex flex-row items-center gap-3 cursor-pointer'>
                    <CiInboxOut className='text-white text-4xl' />
                    <p className='text-lateral'>Contáctanos</p>
                </Link>
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
                <button onClick={() => copyUid()} className='flex flex-row justify-center items-center code-number-container m-2'><CiStickyNote className='text-white text-xl' /></button>
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