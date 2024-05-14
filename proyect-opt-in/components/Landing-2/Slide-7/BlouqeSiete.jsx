import React from 'react'

function BlouqeSiete() {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center justify-center px-24 division-inclinada-invertida'>
        <h2 className='montserrat text-3xl p-10 sombra-texto'><b>PERO LO QUE PASÓ DESPUÉS FUE INCREÍBLE!</b></h2>
        <div className='flex gap-10'>
            <div className='flex flex-col gap-5 w-full'>
                <h2 className='text-center text-xl'>Empece a enseñarle a mucha GENTE <br />cómo llegar a mis mismos resultados usando los <br /> 5 TRUCOS!</h2>
                <h2 className='text-center text-lg'><b>CIENTOS de personas lo compraron y lo aplicaron por ellas mismas </b><br />No podía creer lo que estaba pasando…</h2>
                <p className='text-center text-lg'><b>Y lo MAS LOCO!<br />Fue la reacción de los que hicieron el CURSO y TOMARON LA MENTORIA<br />que vieron los 5 TRUCOS aplicados <br />a la venta de sus propiedades por primera vez...</b></p>
            </div>
            <div className='w-full flex justify-center items-center'>
                <img src="./imgs/landing-2/juan.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default BlouqeSiete