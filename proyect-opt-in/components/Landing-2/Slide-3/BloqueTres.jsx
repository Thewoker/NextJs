import React from 'react'

function BloqueTres() {
    return (
        <section className='min-h-screen min-w-screen flex items-center md:px-24 division-declinada max-md:flex-wrap max-md:h-full max-md:pt-40 '>
            <div className='md:max-w-[50%] md:p-[3%] md:text-white Roboto flex flex-col gap-10'>
                <h4 className='text-2xl max-md:text-center'><b>Quiero contarte cómo descubrí <br className='md:hidden'/> Los 5 Trucos</b></h4>
                <p className='max-md:px-10 max-md:pb-10'><b>De: Juan De Gregorio</b> <br /> <br />
                    <b>Buenos Aires, Argentina</b> <br /> <br /> <br />

                    Querido visitante, <br />
                    Hola! Mi nombre es Juan, y estoy aquí hoy porque quiero darte algo que llamo «Los 5 Trucos». <br /> <br />
                    Este es el sistema completo que usé para poder vender mi casa (que era invendible) y lograr mudarme a un hermoso departamento. <br /><br />
                    El mismo método que utilizo cada vez que quiero vender alguna de mis propiedades para disponer del dinero y utilizarlo en una mejor oportunidad, el mismo método que han utilizado cientos de clientes y han podido vender su departamento en menos de 4 meses pudiéndose mudar a algo mas grande y bonito y pudiendo superar la frustración de estar estancados <br /><br />
                    Pero antes de darte acceso, quiero contarte <b>cómo descubrí estos 5 Trucos</b>. <br /><br />
                    Esto NO es algo que simplemente inventé y comencé a usar…. <br /><br />
                    Pasó un LARGO TIEMPO de  prueba y error en donde aplique métodos vetustos con mis propios departamentos. Las vueltas de la vida hizo que años mas tarde ingresara a trabajar al negocio inmobiliario y noté que estos mismos métodos antiguos e inútiles los utilizaban infinidad de inmobiliarias...
                </p>
            </div>
            <div className='md:max-w-[50%] w-full flex flex-col justify-center items-center gap-2 max-md:px-10'>
                <p className='m-auto text-lg text-center'><b>TODO EMPEZO EN 2002. LUEGO DE DIVORCIARME TENÍA <br /> QUE VENDER MI CASA PARA REPARTIR BIENES</b></p>
                <img src="./imgs/landing-2/casa.png" alt="" />
                <p className='text-center roboto'>PD: Esta es mi casa. <br /> Bonita pero en un barrio con alta inseguridad</p>
                <h3 className='text-center montserrat text-xl'>CONTRATE  A LA INMOBILIARIA DE LA ESQUINA<br />PERO NO TENÍA IDEA DÓNDE ME METÍA..<br /><br />Y ME METÍ EN UN <span className='text-[#ff0000]'><b>INFIERNO</b></span>!</h3>
            </div>
        </section>
    )
}

export default BloqueTres