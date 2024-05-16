"use client"
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardResenas from './CardResenas';

function BloqueOcho() {
    const [width, setWidth] = useState(0); // Inicializa con un valor predeterminado

    useEffect(() => {
        function updateWidth() {
            const screenWidth = window.innerWidth; // Usa window.innerWidth en lugar de screen.width
            if (screenWidth >= 1440) {
                setWidth(10);
            } else if (screenWidth >= 1024) {
                setWidth(10);
            } else if (screenWidth >= 768) {
                setWidth(10);
            } else if (screenWidth >= 425) {
                setWidth(10);
            } else if (screenWidth >= 375) {
                setWidth(10);
            } else if (screenWidth >= 320) {
                setWidth(10);
            }
        }

        updateWidth(); // Llama a la función al montar el componente
        window.addEventListener('resize', updateWidth); // Añade un listener para cambios de tamaño

        return () => {
            window.removeEventListener('resize', updateWidth); // Limpia el listener al desmontar el componente
        };
    }, []); // El array de dependencias vacío asegura que el efecto solo se ejecute al montar y desmontar

    return (
        <div className='min-h-screen min-w-screen flex items-center justify-center'>
            <div className='px-24'>
                <Carousel autoPlay="true" centerMode={true} centerSlidePercentage={width} infiniteLoop>
                    <CardResenas nombre="Veronica Bohinik" comentario="De excelencia Muy pronto vendieron mi casa a buen valor, y Silvia Gasca, me acompañó en todo momento con mi búsqueda , hasta la escritura.Altamente recomendable.Gracias"/>
                    <CardResenas nombre="Puala Muollo" comentario="Muy buena experiencia. Lograron vender la propiedad en muy poco tiempo y supieron contener la ansiedad de mis padres, nuestras y las del comprador. Muchas gracias por toda la gestión 🤗"/>
                    <CardResenas nombre="Marcelo mendoza" comentario="impecable, en esos momentos es muy bueno contar con gente responsable que te saben asesorar y guiar. Si no fuera por ellos jamás hubiera podido vender la casa. No es una cuestion de solo vender, me sentí acompañado y contenido."/>
                    <CardResenas nombre="Maria Pia Laurente" comentario="Tuve una excelente experiencia con Connection, tanto en la venta como en el alquiler de mis propiedades. Eficientes, resolutivos y humanos. Hasta me han ayudado con la venta de muebles para entregar a término la propiedad. No había tenido buenas experiencias con otras inmobiliarias pero con Connection confirmé que no hay que generalizar porque no todos son iguales."/>
                    <CardResenas nombre="Carlos Magua" comentario="Brillante la atención y profesionalidad que han tenido logrando el objetivo en menos de 4/5mese, tiempos económicos complicados y momentos de quiebre electoral por el que estamos atravesando, sin uds esto NO hubiese sido posible. SEGUNDA VENTA CON VERONICA....MILLONES DE GRACIAS VERO Y FELICITACIONES POR TU EXCELENTE"/>
                    <CardResenas nombre="Griselda Dilenge" comentario="Excelente experienia, hemos hecho varias operaciones y todo absolutamente salió muy bien para ambas partes Trabajan en forma personalizada, para ambas partes, y nos guiado y acompañados muy profesionalmente Gracias Maica y Juan!!! Transitamos un periodo difícil en nuestra vida y siempre nos sentimos contenidos y escuchados"/>
                    <CardResenas nombre="Juli Calderaro" comentario="Connection es una inmobiliaria que no conocía, buscando departamento llegué a ellos. Es una empresa de profesionales de experiencia donde desde el primer momento te sentís acompañado, contenido, asesorado y apoyado. Están en los más mínimos detalles de asesoramiento. Son gente seria, responsable y cálida. Muchas veces acudí a inmobiliarias conocidas y de renombre y tuve pésimas experiencias. No dudaría en volver a ellos para hacer una operación y no dudo en recomendarlos. Excelente inmobiliaria!"/>
                    <CardResenas nombre="Santiago Rodil" comentario="Todo el equipo es muy profesional y responsable, mi familia y yo hemos acudido a ellos en varias ocasiones, no solo por la confianza absoluta que les tenemos, sino también porque en todas las ocasiones no han sabido asesorar sobre la realidad de los valores del mercado inmobiliario, sin vueltas o expectativas falsas, super recomendables en todos loas aspectos mas importantes que a mi criterio considero para este tipo de servicios!"/>
                    <CardResenas nombre="Hugo Brioschi" comentario="Son muy profesionsles y muy seguidores de cada caso. Informan permanentemente al cliente de la evolucion de la operacion, proponen soluciones para cualquier traba de la misma y alternativas para que la compra o venta se realice a un precio justo y conveniente para las partes."/>
                </Carousel>
            </div>
        </div>
    )
}

export default BloqueOcho