"use client"
import React, { useEffect, useState } from 'react';
import "./our-coaches.css"
import Card from './carousel/Card'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function OurBestCoaches() {
  const [width, setWidth] = useState(0); // Inicializa con un valor predeterminado

  useEffect(() => {
    function updateWidth() {
      const screenWidth = window.innerWidth; // Usa window.innerWidth en lugar de screen.width
      if (screenWidth >= 1440) {
        setWidth(30);
      } else if (screenWidth >= 1024) {
        setWidth(40);
      } else if (screenWidth >= 768) {
        setWidth(50);
      } else if (screenWidth >= 425) {
        setWidth(85);
      } else if (screenWidth >= 375) {
        setWidth(95);
      } else if (screenWidth >= 320) {
        setWidth(100);
      }
    }

    updateWidth(); // Llama a la función al montar el componente
    window.addEventListener('resize', updateWidth); // Añade un listener para cambios de tamaño

    return () => {
      window.removeEventListener('resize', updateWidth); // Limpia el listener al desmontar el componente
    };
  }, []); // El array de dependencias vacío asegura que el efecto solo se ejecute al montar y desmontar

  return (
    <div className='pt-14'>
      <div className='flex flex-col w-full h-[60vh] max-xl:h-full px-[15%] justify-center bg-[#1c1c1c] our-coaches'>
        <h2 className='russo'>Nuestros entrenadores profesionales</h2>
        <p className='pb-5 roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam dignissimos repellat doloremque sint modi nesciunt inventore nemo ducimus mollitia.</p>
        <div className=''>
          <Carousel autoPlay="true" centerMode={true} centerSlidePercentage={width} infiniteLoop>
            <Card title="Lesley Lloyd" description="Crossfit Coach" imgURL="person1.jpg" />
            <Card title="Cecile Lawson" description="Crossfit Coach" imgURL="person2.jpg" />
            <Card title="Russell Ponce" description="Powerlifting Coach" imgURL="person3.jpg" />
            <Card title="Henry Brown" description="Calistenia Coach" imgURL="person4.png" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default OurBestCoaches