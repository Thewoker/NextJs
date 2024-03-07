"use client"
import React, { useEffect, useState } from 'react';
import { db } from "@/firebase/config"
import { collection, doc, getDoc } from "firebase/firestore"
import { usePathname } from 'next/navigation'
import path from 'path';
import LateralBar from '@/components/cursos/LateralBar'
import './curso.css'
import CursoBar from '@/components/curso/CursoBar';

const getClases = async (currentFolder) => {
    const courseRef = collection(db, 'cursos');
    console.log(currentFolder)
    const docSnapshot = await getDoc(doc(courseRef, currentFolder));
    const data = docSnapshot.data();

    if (data) {
        const classData = data.clases;
        // console.log(classData)
        return classData;
    }

    return null;
}

function Page() {
    const pathname = usePathname()
    const currentFolder = path.basename(pathname);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getClases(currentFolder);
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='flex flex-row relative'>
            <div className='w-[15%] flex flex-col justify-center items-center'>
                <LateralBar />
            </div>
            <div className='w-[85%] m-0 p-0'>
                <div className='h-[10%] barra-sup relative'>
                    <p className='absolute titles-main absolute-center'>Cálculo I</p>
                </div>
                <div className='h-[100vh] bg-[#263159] p-12'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='subtitle-into'><h2>Programa</h2></div>
                        <div className='flex flex-row justify-center items-center material-de-estudio p-1'><button>Material de Estudio</button></div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 py-5'>
                        {courses?.map((course) => (
                            <CursoBar key={course.titulo} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page