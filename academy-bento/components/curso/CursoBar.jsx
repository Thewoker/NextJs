import React from 'react'
import ReactPlayer from 'react-player'
import { CiCircleCheck } from "react-icons/ci";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import './cursos.css'


function CursoBar({ course }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('5xl')

    const handleOpen = () => {
        onOpen();
    }

    const hadleClose = () => {
        onClose();
    }
    return (
        <>
            <div className='flex flex-row justify-between items-center p-5 clase-bar w-full'>
                <div className='flex flex-row gap-3'>
                    <CiCircleCheck className='check-vid' />
                    <h3>
                        {course.titulo}
                    </h3>
                </div>
                <button className='btn-ver-video py-1 px-3' onClick={() => handleOpen()}>Ver video</button>

                {/* Modal */}
                <Modal
                    size={size}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col justify-center items-center gap-1">{course.titulo}</ModalHeader>
                                <ModalBody>
                                    <div className='flex flex-col justify-center items-center'>
                                        <ReactPlayer url={course.video} />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={() => hadleClose()}>
                                        Marcar como visto
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    )
}

export default CursoBar