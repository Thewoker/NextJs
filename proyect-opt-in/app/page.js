"use client"
import Image from "next/image";
import "./main.css"
import dynamic from 'next/dynamic';


const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/formSubmit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-center md:px-24 relative max-md:h-full pb-20">
      <div className="pt-32 flex flex-col justify-center items-center max-md:mt-10 max-md:text-center gap-3 max-md:pb-5">
        <p><b>Se agrandó  la familia?, falta de espacio?, altas expensas?, necesidad de un balcón o de verde? NECESITAS VENDER PARA MUDARTE?</b></p>
        <h1 className="text-5xl font-bold text-center text-[#ff0000]">LOS 5 TRUCOS <br/>
          para salir de la frustración de no poder mudarte
        </h1>
      </div>
      <div class="container flex max-md:flex-wrap">
        <div className="form-container flex flex-col gap-5">
          <p className="text-base text-gray-600"><b>VAS A PODER VENDER TU DEPARTAMENTO EN MENOS DE 4 MESES  Y MUDARTE A ALGO MAS GRANDE
            MINIMIZANDO LA DIFERENCIA A PAGAR</b> y todo en forma <b>SIMULTANEA</b> para no tener que ir a vivir a un hotel
          </p>
          <form className="form" onSubmit={handleSubmit}>
            <label className="form-label">
              Nombre:
              <input type="text" name="nombre" required className="form-input" />
            </label>
            <label className="form-label">
              Correo electrónico:
              <input type="email" name="email" required className="form-input" />
            </label>
            <label className="form-label left-align-checkbox flex items-center gap-3">
              <input type="checkbox" name="ambientes" className="form-checkbox" />
              <span className="checkbox-text checkbox-text">Quiero vender mi departamento de 2 ó 3 ambientes para mudarme a algo mas grande.</span>
            </label>
            <label className="form-label left-align-checkbox flex items-center gap-3">
              <input type="checkbox" name="consejos" className="form-checkbox" />
              <span className="checkbox-text checkbox-text">Acepto recibir correos con consejos de temas inmobiliarios</span>
            </label>
            <button type="submit" className="form-button text-black max-md:m-5"><b className="text-black text-2xl">Ir a ver video con  los 5 TRUCOS</b></button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center p-5 gap-3 m-auto max-md:max-w-full">
          <p className="text-center roboto text-sm"><b>LOS 5 TRUCOS</b> que me PERMITIERON A MI Y A CIENTOS DE PERSONAS MUDARSE Y CONCRETAR SU SUEÑO</p>
          <p className="text-center roboto text-sm">2024 momento histórico para mudarse. <span className="underline">Bajos precios permiten invertir la  mínima diferencia de los últimos 5 años</span>
          </p>
          <div className="flex max-w-full justify-center items-center max-md:flex-wrap max-md:pb-24">
            <img src="./imgs/landing-1/img.jpg" className="max-w-full max-md:h-[250px] max-md:w-[250px] md:h-[300px]  md:w-[300px] "/>
            <img src="./imgs/landing-1/img2.png" className="max-w-full max-md:h-[250px] max-md:w-[250px] md:h-[300px]  md:w-[300px]"/>
          </div>
        </div>
      </div>
      <p className="text-black text-center absolute bottom-0 bg-[#ff0000] text-balance ">
        ATENCION: solo te servirá si vendes un departamento o PH,  NO casa / que cuente con balcón patio o terraza y no sea interno /
        que no sea planta baja ni ultimo piso / que se encuentre en buenas condiciones sobre todo baño y cocina / no tenga graves problemas de humedad / Escritura a tu nombre
      </p>
    </main>
  );
}
