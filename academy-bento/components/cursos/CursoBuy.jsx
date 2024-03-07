import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import './curso.css'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useAuthContext } from '@/contexts/AuthContext'
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '@/firebase/config'
import { toast } from 'react-toastify';
import { collection, getDocs } from "firebase/firestore";



function CursoBuy({ course }) {
    const [notification, setNotificacion] = useState({
        isOpen: false,
        type: null,
        content: "",
    });
    const { plan, setPlan, user } = useAuthContext()
    const [codigoAfiliado, setCodigoAfiliado] = useState({
        codigo: null
    });
    const [selectedKeys, setSelectedKeys] = useState(new Set(["semestral"]));
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    const [selectedPlan, SetSelectedPlan] = useState('semestral')


    const fetchData = async () => {
        if (db && user && user.uid) {
            const userRef = doc(db, 'usuarios', user.uid);
            const userSnapshot = await getDoc(userRef);
            const courseData = userSnapshot?.data();
            await updateDoc(userRef, { cursoPagado: plan.id })
        } else {
            console.log("Error al procesar datos intentalo de nuevo")
        }
    };

    fetchData();


    useEffect(() => {

    }, [], [selectedValue])

    const handleChange = (e) => {
        setCodigoAfiliado({
            ...codigoAfiliado,
            [e?.target?.name]: e?.target?.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (db && user && user.uid && codigoAfiliado.codigo) {
            try {
                const usersCollection = collection(db, 'usuarios');
                const usersSnapshot = await getDocs(usersCollection);
                let found = false;
                usersSnapshot.forEach((doc) => {
                    if (doc.id === codigoAfiliado.codigo) {
                        found = true;
                    }
                });
        
                if (found) {
                    if (codigoAfiliado.codigo != user.uid) {
                        const userRef = doc(db, 'usuarios', user.uid);
                    await updateDoc(userRef, { codigoAUnAfiliado: codigoAfiliado.codigo })
                    toast.success("Codigo aplicado correctamente.", {
                        hideProgressBar: true,
                    });
                    }else{
                        toast.error(`El codigo ingresado no puede ser el tuyo.`, {
                            hideProgressBar: true,
                        });
                    }
                } else {
                    toast.error(`Codigo ingresado invalido.`, {
                        hideProgressBar: true,
                    });
                }
            } catch (error) {
                toast.error(`Codigo ingresado invalido.`, {
                    hideProgressBar: true,
                });
            }
        } else {
            toast.error(`Error al procesar datos intentalo de nuevo.`, {
                hideProgressBar: true,
            });
            console.log("Error al procesar datos intentalo de nuevo")
        }
    }


    return (
        <div className='relative flex flex-col justify-center items-center curso-container-modal'>
            <p className='absolute top-0 subtitulo w-full text-center'>{course.subtituloCurso}</p>
            <div className='flex flex-col justify-center items-center gap-2 '>
                <h2 className='titulo-buy text-black'>{course.titulo}</h2>
                <img className='curso-img' src={`${course.imgCurso}`} alt="" />
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <input
                            type="text"
                            value={codigoAfiliado.codigo || ""}
                            className='rounded w-full border border-blue-500'
                            name='codigo'
                            onChange={handleChange}
                        />
                        <button type='submit text-center'>aplicar</button>
                    </div>
                </form>
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
                        }>Plan Semestral: {course.precioSemestral} CLP</DropdownItem>
                        <DropdownItem key="mensual" onClick={() => {
                            setPlan({ id: course.slug, title: course.titulo, price: Number(course.precioMensual) });
                            SetSelectedPlan('mensual')
                        }
                        }>Plan Mensual: {course.precioMensual} CLP</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Link href={`/${course.slug}`} className="btn-acceder flex justify-center items-center" onClick={() => { (selectedPlan == "semestral") ? setPlan({ id: course.slug, title: course.titulo, price: Number(course.precioSemestral) }) : setPlan({ id: course.slug, title: course.titulo, price: Number(course.precioMensual) }) }}>
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