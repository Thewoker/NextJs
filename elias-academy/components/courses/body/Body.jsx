import React, { } from 'react'
import Button from '@/components/ui/button/Button';
import dynamic from 'next/dynamic'
import Header from '@/components/courses/header/Header';
import ClassBar from './ClassBarList'
import { usePathname } from 'next/navigation'
import path from 'path';
import { db } from "@/firebase/config"
import { collection, doc, getDoc, query, where } from "firebase/firestore"

function Body() {
    const pathname = usePathname()
    const currentFolder = path.basename(pathname);
    const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
    var [allClass, setAllClass] = React.useState({})
    var [video, setVideo] = React.useState([])
    var [videoChoose, setVideoChoose] = React.useState(0)

    const fetchData = async (currentFolder) => {
        try {
            const docRef = doc(collection(db, "into-courses"), currentFolder);
            const docSnap = await getDoc(docRef);
            const data = docSnap.data();

            if (data) {
                const classList = data.class;
                // Aquí puedes hacer lo que necesites con la lista "classList"
                setAllClass(classList);

                // console.log(classList.length);
            } else {

                console.log("Documento no encontrado");
            }
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    const fetchDataVideo = async (currentFolder, videoSelect) => {
        try {
            const docRef = doc(collection(db, "into-courses"), currentFolder);
            const docSnap = await getDoc(docRef);
            const data = docSnap.data();

            if (data) {
                const classList = data.class;
                // Aquí puedes hacer lo que necesites con la lista "classList"

                const video = classList[videoSelect]
                setVideo(video)
            } else {

                console.log("Documento no encontrado");
            }
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    const handleLiClick = (index) => {
        setVideoChoose(index);
    };

    const handleNextClass = () => {
        console.log(allClass.length)
        console.log(videoChoose)
        if (allClass.length !== (videoChoose + 1)) {
            setVideoChoose(videoChoose + 1);
        }
    };

    const handlePreviousClass = () => {
        console.log(allClass.length)
        console.log(videoChoose)
        if (videoChoose > 0) {
            setVideoChoose(videoChoose - 1);
        }
    };

    React.useEffect(() => {
        fetchData(currentFolder);
        fetchDataVideo(currentFolder, videoChoose)
    }, [videoChoose]);
    return (

        <div className='flex body-course'>
            <div className="barra-lateral">
                <h3>Material de Estudio</h3>
                <ul>
                    {Array.isArray(allClass) ? (
                        allClass.map((course, index) => (
                            <li className="" key={course.title} onClick={() => handleLiClick(index)}>
                                <a href="#">{course.title}</a>
                            </li>
                        ))
                    ) : (
                        <p>No hay datos disponibles</p>
                    )}
                </ul>
            </div>
            <div className='flex flex-col w-3/4 h-screen justify-center items-center contenido relative'>
                <Header />
                <h1 className='title-class'>Clase 1 - Definición de algoritmos</h1>
                <ReactPlayer
                    url={video.video}
                    height='50vh'
                    width='50vw'
                    controls={true}
                    className='m-12'
                />
                <div className='flex'>
                    <div className='justify-end items-end' onClick={handlePreviousClass}><Button content='Clase anterior' width="194px" height="48px" /></div>
                    <div onClick={handleNextClass}><Button content='Siguiente clase' width="194px" height="48px" /></div>
                </div>

            </div>
        </div>
    )
}

export default Body