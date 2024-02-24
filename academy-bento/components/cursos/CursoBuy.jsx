import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import './curso.css'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import MercadoPagoButton from './MercadoPagoButton'



function CursoBuy({ course, buy }) {
    const [notification, setNotificacion] = useState({
        isOpen: false,
        type: null,
        content: "",
    });
    const [chosedPlan, setChosedPlan] = useState(course.precioSemestral);
    const [orderData, setOrderData] = useState({ id: course.slug, titulo: course.titulo, precio: Number(chosedPlan) });




    

    const [courseToBuy, setCourseToBuy] = useState(null);
    const [plan, setPlan] = useState(new Set(["semestral"]));
    const handlePlan = React.useMemo(
        () => Array.from(plan).join(", ").replaceAll("_", " "),
        [plan]
    );


    useEffect(() => {

        setChosedPlan(plan == "semestral" ? course.precioSemestral : course.precioMensual)
        setOrderData({ id: course.slug, titulo: course.titulo, precio: Number(chosedPlan) })

        // buy(courseToBuy, chosedPlan)
    }, [], [plan])

    return (
        <div className='relative flex flex-col justify-center items-center curso-container'>
            <p className='absolute top-0 subtitulo w-full text-center'>{course.subtituloCurso}</p>
            <div className='flex flex-col justify-center items-center gap-2 '>
                <h2 className='titulo-buy text-black'>{course.titulo}</h2>
                <img className='curso-img' src={`${course.imgCurso}`} alt="" />
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                            className="capitalize"
                        >
                            {handlePlan}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={plan}
                        onSelectionChange={setPlan}
                    >
                        <DropdownItem key="semestral">Plan Semestral: {course.precioSemestral} CLP</DropdownItem>
                        <DropdownItem key="mensual">Plan Mensual: {course.precioMensual} CLP</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <div className="btn-acceder flex justify-center items-center">
                    <MercadoPagoButton product={orderData} className="" />
                </div>
                {notification.isOpen && (
                    <div className="">
                        <div
                            className=""
                            style={{
                                backgroundColor:
                                    notification.type === "approved" ? "#00cc99" : "#ee4646",
                            }}
                        >
                            <p>{notification.type}</p>
                        </div>

                        <p>{notification.content}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CursoBuy