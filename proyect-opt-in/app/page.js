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
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center px-24 relative">
      <div className="pt-28 flex flex-col justify-center items-center gap-5">
        <p><b>¿Se agrandó  la familia?, ¿falta de espacio?, ¿altas expensas?, ¿necesidad de un balcón o de verde?
          ¿NECESITAS VENDER PARA MUDARTE?</b></p>
        <h1 className="text-3xl font-bold text-[#ff0000]">LOS 5 TRUCOS
          para salir de la frustración de no poder mudarte
        </h1>
      </div>
      <div class="container flex">
        <div className="form-container flex flex-col gap-2">
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
            <button type="submit" className="form-button">Ir a ver video con  los 5 TRUCOS</button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center p-5 gap-3 m-auto">
          <p className="text-center roboto text-sm"><b>LOS 5 TRUCOS</b> que me PERMITIERON A MI Y A CIENTOS DE PERSONAS MUDARSE Y CONCRETAR SU SUEÑO</p>
          <p className="text-center roboto text-sm">2024 momento histórico para mudarse. Bajos precios permiten invertir la  mínima diferencia de los últimos 5 años
          </p>
          <ReactPlayer url='https://youtu.be/YmI_f3vIlt8' />
        </div>
      </div>
      <p className="text-gray-200 text-center absolute bottom-0 bg-[#ff0000] text-balance">
        ATENCION: solo te servirá si vendes un departamento o PH,  NO casa / que cuente con balcón patio o terraza y no sea interno /
        que no sea planta baja ni ultimo piso / que se encuentre en buenas condiciones sobre todo baño y cocina / no tenga graves problemas de humedad
      </p>
    </main>
  );
}
