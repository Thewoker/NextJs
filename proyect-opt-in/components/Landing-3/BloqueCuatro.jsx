import React from 'react'

function BloqueCuestro() {
  return (
    <div className='min-h-screen md:px-24 max-md:flex-wrap max-md:h-full flex flex-col justify-center items-center gap-5 relative'>
      <h2 className='text-center text-3xl'>
        <b>
          <span className='text-[#ff0000] text-6xl'>Importante!</span>
          <br /><br />
          SABIAS LA DIFERENCIA ENTRE PRECIO Y VALOR?
          <br /><br />
          PRECIO ES LO QUE PAGAS Y VALOR ES LO QUE OBTENÉS <br /><br /><br />
        </b>
      </h2>

      <div className='flex w-full md:gap-5  '>
        <div className='flex flex-col w-1/2 gap-5'>
          <h3 className='text-center text-2xl'><b>ESTO ES LO QUE  PAGARAS POR LA MENTORIA Juaninmobiliario 360</b></h3>
          <p className='text-xl'>
            ▶️ USD 977  Por la mentoría (Por 72 hs, luego Usd 1,500)
            <br /><br />
            ▶️ 3% Por la operación de venta de tu actual departamento (*)
            <br /><br />
            ▶️ 4% Por la operación de compra de tu nuevo departamento (**)
          </p>
        </div>
        <div className='flex flex-col w-1/2 gap-5'>
          <h3 className='text-center text-2xl'><b>CUANTO PAGARIAS  EN UNA INMOBILIARIA COMPETIDORA?</b></h3>
          <p className='text-xl'>
            <span className='line-through'>
            ▶️ USD 977  Por la mentoría.  Lo pagas ahora</span>
            <br /><br />
            ▶️ 3% Por la operación de venta de tu actual departamento (*)
            <br /><br />
            ▶️ 4% Por la operación de compra de tu nuevo departamento (**)
          </p>
        </div>
      </div>
          <p className='text-xs md:absolute right-0 bottom-0'>
            (*) % sobre el precio real de venta. Se paga si efectivamente se vende. Se paga al momento de escriturar <br />
            (**) % Sobre el precio real de compra. Se paga si efectivamente se compra otra propiedad. Se paga al momento de escriturar
          </p>
    </div>
  )
}

export default BloqueCuestro