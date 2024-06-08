import React from 'react'

function BloqueTres() {
    return (
        <div className='min-h-screen md:px-24 max-md:flex-wrap max-md:h-full flex flex-col justify-center items-center gap-5'>
            <h2 className='text-center text-5xl'><b>¿EMPEZÁS A IMAGINARLO?</b></h2>
            <div className='flex w-full  justify-around items-center gap-4'>
                {/* <p className='text-2xl md:w-[300px] bg-[#4472c4] text-white p-3'>
                    ✅ 1 dormitorio mas <br /><br />
                    ✅ 1 baño mas<br /><br />
                    ✅ Cocina mas grande<br /><br />
                    ✅ Amplio balcón<br />
                </p> */}
                <img src="/imgs/landing-3/WhatsApp Image 2024-05-26 at 17.41.40_d53c6320.jpg" className="w-[40%] h-[40%]" alt="" />
                <img src="/imgs/landing-3/Screenshot 2024-05-26 133000.jpg" className="w-[40%] h-[40%]" alt="" />
            </div>
            <div className='flex flex-col w-[60%] gap-3'>
                <p className='text-center text-3xl'>
                    <b className='underline'>Inscribite HOY MISMO!</b> TODO LLAVE EN MANO <br />
                    y empeza el camino para concretar el sueño de mudarte a algo mas grande o mas lindo.
                </p>
                <p className='text-[#ff0000] text-center text-3xl'><b>CUPOS LIMITADOS 20 PERSONAS</b></p>
                <div className='flex flex-col w-full gap-3 borde-caja-azul p-10 px-16 rounded-xl'>
                    <p className='text-[#0000ff] text-center'>
                        Reserva tu cupo por USD 100, congela el precio de la Mentoría <br /> y obtené la tasación de tu propiedad <br />
                        (Una vez que recibas y apruebes nuestra tasación pagaras el saldo. Aprox 7 dias) <br />
                    </p>
                    <button className='text-white bg-[#0000ff] mx-10 py-2 text-3xl rounded-lg button-animate'><b>INSCRIBIRME A LA MENTORIA</b></button>
                    <p className='text-[#0000ff] text-center text-sm'>
                        🔐Reserva segura. No te preocupes, si no estas conforme con nuestro servicio o con nuestra tasación, <br />
                        te devolvemos el dinero sin preguntas ( ver garantías 1-2-3)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BloqueTres