"use client"
import React from 'react'
import './cursos.css'
import LateralBar from '@/components/cursos/LateralBar'
import CursosList from '@/components/cursos/CursosList'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import CursoBuy from '@/components/cursos/CursoBuy'
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase/config"

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

function page() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('5xl')
    const [courses, setCourses] = React.useState([]);

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
        <div className='flex flex-row relative'>
            <div className='w-[15%] flex flex-col justify-center items-center'>
                <LateralBar />
            </div>
            <div className='w-[85%] m-0 p-0'>
                <div className='h-[10%] barra-sup relative'>
                    <p className='absolute titles-main absolute-center'>Mis Cursos</p>
                    <p className='absolute titles-main absolute-rigth-center cursor-pointer' onClick={() => handleOpen()}>Agregar Curso</p>

                    {/* Modal para agregar cursos */}
                    <Modal
                        size={size}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col justify-center items-center gap-1">¡¡Accede a los mejores cursos aqui!!</ModalHeader>
                                    <ModalBody>
                                        <div className='flex flex-row justify-center items-center flex-wrap gap-20 p-10'>
                                            {courses?.map(course => <CursoBuy key={course.slug} course={course}/>)}
                                        </div>
                                    </ModalBody>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
                <div className='min-h-screen bg-[#263159]'>
                    <CursosList />
                </div>
            </div>
        </div>
    )
}

export default page