'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './compra.css'
import { db } from '@/firebase/config'
import { doc, getDoc } from "firebase/firestore"
import { usePathname } from 'next/navigation'
import { useAuthContext } from '@/contexts/AuthContext'
import path from 'path';
import { MPButton } from '@/components/mercado-pago/MPButton'

const getCourse = async (currentFolder) => {
    const courseRef = doc(db, 'cursos', currentFolder);
    const courseSnapshot = await getDoc(courseRef);
    const courseData = courseSnapshot?.data();

    return courseData;
}

function page() {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname()
    const { plan } = useAuthContext()
    const currentFolder = path.basename(pathname);
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async (currentFolder) => {
            const data = await getCourse(currentFolder)
            setData(data)
            setLoading((plan.id == null) ? true : false)
        }
        fetchData(currentFolder)
    }, [])

    return (
        <div className='min-h-screen h-full min-w-screen w-full flex flex-col justify-center items-center'>
            {loading ? (
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-white text-[50px]'>
                        Loading
                        <span className='dot' style={{ '--i': 0 }}>.</span>
                        <span className='dot' style={{ '--i': 1 }}>.</span>
                        <span className='dot' style={{ '--i': 2 }}>.</span>
                    </h2>
                </div>
            ) : (
                <>
                    <Link href={'/'} className='flex flex-row w-full justify-center items-center h-[15%] absolute top-0 header-registro'><h2 className='titulo cursor-pointer'>
                        FreshmanU
                    </h2></Link>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-center text-2xl font-bold text-white'>{data.titulo}</h2>
                        <p className='text-center text-xl font-semibold text-white'> ${plan.price} CLP </p>
                        <img src={data.imgCurso} alt='Product Image' className='my-4 w-64 h-64 object-cover' />
                        <div>
                            <MPButton product={plan}/>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default page