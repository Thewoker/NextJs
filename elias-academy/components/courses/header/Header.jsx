import React from 'react'
import Boton from '@/components/ui/button/Button';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md')
    const [asunto, setAsunto] = React.useState('');
    const [duda, setDuda] = React.useState('');
    const handleOpen = (size) => {
        setSize(size)
        onOpen();
    }
    var mail = () => {
        const mailtoLink = `mailto:leoneljararavarotto@hotmail.com?subject=${asunto}&body=${duda}`;
        window.location.href = mailtoLink;
    };

    return (
        <div>
            <div className='flex justify-between items-center'>
                <a className='header-left' href='/plataform'>
                    <Boton content='Volver' width='194px' height='48px' />
                </a>
            </div>
            <div className='flex justify-between items-center'>
                <div className='header-right' onClick={() => handleOpen("5xl")}>
                    <Boton content='Consulta con un tutor' width='308px' height='48px' />
                </div>
            </div>

            {/* Start Modal */}
            <Modal
                size={"5xl"}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col flex-wrap gap-1 text-center">¿Tienes dudas? Consulta con un tutor</ModalHeader>
                            <ModalBody>
                                <form action="" method="get">
                                    <label>Asunto:<br /><input type="text" style={{ width: '100%' }} className='border border-black h-[5vh]' value={asunto} onChange={(e) => setAsunto(e.target.value)} /></label>
                                    <label>Aquí va tu duda:<br /><textarea style={{ width: '100%', height: '40vh', minHeight: '50px', resize: 'vertical' }} className='border border-black' value={duda} onChange={(e) => setDuda(e.target.value)} wrap="soft"></textarea></label>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <button type="submit" value="Submit">
                                    <Button color="primary" onPress={onClose} onClick={mail}>
                                        Enviar
                                    </Button>
                                </button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Header

