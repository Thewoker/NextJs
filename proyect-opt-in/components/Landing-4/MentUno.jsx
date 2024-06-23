"use client"
import React, { useState } from 'react';
import Timer from "./Timer";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

function MentUno() {
    const [isOpen, setIsOpen] = useState(false);

    let now = today(getLocalTimeZone());
    let futureDate = now.add({ days: 14 });
    const [selectedDate, setSelectedDate] = useState(null);


    let isDateUnavailable = (date) => date.compare(now) < 0 || date.compare(futureDate) > 0;

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
      };

    const postData = async () => {
        try {
          const response = await fetch("/api/video", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ selectedDate }),
          });
          // Handle response as needed
          console.log(response.message);
        } catch (error) {
          console.error("Error posting data:", error);
        }
      };

    return (
        <div className="min-h-screen md:h-screen flex flex-col items-center justify-center md:px-24 md:mb-80 max-md:h-full gap-5 max-md:px-5 max-md:pb-20 md:pt-64">
            <div className="pt-32 flex flex-col justify-center items-center max-md:mt-8 max-md:text-center gap-3 max-md:pb-5">
                <p className="text-xl"><b>Se agrandó la familia?, falta de espacio?, altas expensas?, necesidad de un balcón o de verde? NECESITAS VENDER PARA MUDARTE?</b></p>
                <h1 className="text-5xl font-bold text-center text-[#ff0000]">LOS 5 TRUCOS <br />
                    <span className="text-2xl">QUE ME PERMITIERON A MI Y A CIENTOS DE FAMILIAS SALIR DE LA FRUSTRACION DE NO PODER MUDARSE</span>
                </h1>
            </div>
            <div className="bg-[#5414f4] w-screen flex justify-center items-center py-10">
                <h3 className="text-white text-center md:text-3xl max-md:text-xl px-5">
                    <b className="md:text-5xl max-md:text-3xl">MIRA AHORA EL ENTRENAMIENTO GRATUITO</b><br />
                    En menos de lo que dura una película de Netflix te contaré: <br />
                    <br />
                    COMO VENDER TU DEPARTAMENTO EN MENOS DE 4 MESES Y MUDARTE <br />
                    MINIMIZANDO LA DIFERENCIA A PAGAR VS LOS ULTIMOS 5 AÑOS <br />
                    <b className="text-[#ff0000]">PODRAS HACERLO TODO POR TI MISMO! YA NO DEPENDERAS DE NADIE!</b><br />
                </h3>
            </div>
            <div className='flex justify-center items-center gap-20 max-md:flex-col'>
                <div className="p-5 flex max-md:justify-center max-md:items-center max-md:w-full flex-col gap-16 md:w-1/2 max-md:m-5">
                    <Timer />
                    <button onClick={handleOpen} className='p-5 text-xl rounded-lg bg-green-400 text-black roboto button-animate sombra-caja max-md:my-10 max-md:w-1/2'><b>Agendarme para ver en otro momento</b></button>
                    <p className="text-center max-md:w-[60%]">*Si no podes verlo ahora, agéndate para verlo el día y horario que quieras, haciendo click en el botón de aquí arriba.</p>
                </div>
                <div className='flex flex-col justify-center max-md:gap-10 md:w-1/2 items-center max-md:p-5 max-md:px-10'>
                    <ReactPlayer width={window.innerWidth > 425 ? 600 : 300} height={window.innerWidth > 425 ? 400 : 200} url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
                    <p className="text-center max-md:w-[60%]">
                        IMPORTANTE: el botón para POSTULAR a la MENTORÍA aparecerá aquí abajo cuando
                        finalice el video.
                        <b className="text-[#ff0000]">Sólo estará disponible durante 14 días</b> (después volverá a ser pago)
                    </p>
                </div>
            </div>
            <Modal backdrop="blur" isOpen={isOpen} onClose={handleClose} size="lg" placement="center">
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Elige un día disponible para ver el video completo</ModalHeader>
                        <ModalBody>
                            <form action="" className="flex w-full h-full justify-center items-center">
                                <Calendar
                                    aria-label="Date (Unavailable)"
                                    isDateUnavailable={isDateUnavailable}
                                />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onClick={handleClose}>
                                Close
                            </Button>
                            <Button color="primary" onClick={handleClose}>
                                Action
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default MentUno;
