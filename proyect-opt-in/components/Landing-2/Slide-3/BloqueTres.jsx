import React from 'react'

function BloqueTres() {
    return (
        <section className='min-h-screen min-w-screen flex items-center px-24 division-declinada'>
            <div className='max-w-[50%] text-white Roboto flex flex-col gap-10'>
                <p><b>De: Juan De Gregorio</b> <br />
                    <b>Buenos Aires, Argentina</b> <br />

                    Querido visitante, <br />
                    Hola! Mi nombre es Juan, y estoy aquí hoy porque quiero darte algo que llamo «Los 5 Trucos». <br />
                    Este es el sistema completo que usé para poder vender mi casa (que era invendible) y lograr mudarme a un hermoso departamento. <br />
                    El mismo método que utilizo cada vez que quiero vender alguna de mis propiedades para disponer del dinero y utilizarlo en una mejor oportunidad, el mismo método que han utilizado cientos de clientes y han podido vender su departamento en menos de 4 meses pudiéndose mudar a algo mas grande y bonito y pudiendo superar la frustración de estar estancados
                    Pero antes de darte acceso, quiero contarte cómo descubrí estos 5 Trucos.
                    Esto NO es algo que simplemente inventé y comencé a usar….
                    Pasó un LARGO TIEMPO de  prueba y error en donde aplique métodos vetustos con mis propios departamentos. Las vueltas de la vida hizo que años mas tarde ingresara a trabajar al negocio inmobiliario y noté que estos mismos métodos antiguos e inútiles los utilizaban infinidad de inmobiliarias...
                    ..compre muchos libros, cursos y videos de gures.
                </p>
                <p className='m-auto text-lg'><b>EN 2002 LUEGO DE DIVORCIARME VENDI MI PRIMERA CASA</b></p>
            </div>
            <div className='max-w-[50%] w-full flex flex-col justify-center items-center gap-5'>
                    <img src="./imgs/landing-2/casa.png" alt="" />
                    <p className='text-center roboto'>PD: Esta es mi casa. <br /> Bonita pero en un barrio con alta inseguridad</p>
                <h3 className='text-center montserrat'>PERO NO TENÍA IDEA DÓNDE ME METÍA..  <br /> CONTRATE  A LA INMOBILIARIA DE LA ESQUINA <br /> Y ME METÍ EN UN INFIERNO!</h3>
            </div>
        </section>
    )
}

export default BloqueTres