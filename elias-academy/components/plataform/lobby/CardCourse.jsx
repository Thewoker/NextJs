"use client"
import React, {useState, useEffect} from 'react'
import './plataform.css'
import Link from 'next/link';


function CardCourse({ course }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(course.imgLobby)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch image");
                }
                return response.blob();
            })
            .then((blob) => {
                const url = URL.createObjectURL(blob);
                setImageUrl(url);
            })
            .catch((error) => {
                console.error(error);
                // Manejar el error aquí, por ejemplo, mostrando un mensaje de error al usuario
            });
    }, [course.imgLobby]);

    return (
        <div>
            <Link className="card" href={`/courses/${course.slug}`}>
                <h2 className="card-title">{course.title}</h2>
                <img src={course.imgLobby} alt="Imagen" className="card-image" />
                <button className="card-button">Acceder</button>
            </Link>
        </div>
    )
}

export default CardCourse