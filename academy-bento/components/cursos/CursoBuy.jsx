import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import './curso.css'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useAuthContext } from '@/contexts/AuthContext'



function CursoBuy({ course }) {
    const [notification, setNotificacion] = useState({
        isOpen: false,
        type: null,
        content: "",
    });
    const [orderData, setOrderData] = useState({ id: course.slug, title: course.titulo, price: Number(course.precioSemestral) });
    const { plan, setPlan } = useAuthContext()
    const [selectedKeys, setSelectedKeys] = useState(new Set(["semestral"]));
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    const [ selectedPlan, SetSelectedPlan ] = useState('semestral')


    useEffect(() => {

    }, [], [selectedValue])

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
                            {selectedValue}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        <DropdownItem key="semestral" onClick={() => { 
                            setPlan({ id: course.slug, title: course.titulo, price: Number(course.precioSemestral) });
                            SetSelectedPlan('semestral')
                        }
                        }>Plan Semestral:  CLP</DropdownItem>
                        <DropdownItem key="mensual" onClick={() => { 
                            setPlan({ id: course.slug, title: course.titulo, price: Number(course.precioMensual) });
                            SetSelectedPlan('mensual')
                        }
                        }>Plan Mensual:  CLP</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Link href={`/${course.slug}`} className="btn-acceder flex justify-center items-center" onClick={() => { (selectedPlan == "semestral") ? setPlan({ id: course.slug, title: course.titulo, price: Number(course.precioSemestral) }) : setPlan({ id: course.slug, title: course.titulo, price: Number(course.precioMensual) })}}>
                    Comprar
                </Link>
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