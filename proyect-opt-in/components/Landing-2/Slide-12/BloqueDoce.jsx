import React from 'react'

function BloqueDoce() {
    return (
        <div className='min-h-screen min-w-screen flex items-center justify-center division-declinada-invertida max-md:flex-wrap max-md:h-full '>
            <div className='flex flex-col w-full justify-center items-start gap-10 md:px-20 '>
                <h2 className='text-left roboto md:text-white'><b>Estoy Tan Convencido De Esto...</b></h2>
                <p className='text-lg roboto md:text-white'>
                    Que cada vez que llega un cliente a mi mentoría…<br />
                    Cada vez que tengo que vender alguna de mis propiedades…<br />
                    Cada vez que un amigo o un familiar me piden consejo…<br />
                    Copio y pego estos 5 TRUCOS…
                </p>
                <div className='flex flex-col w-full items-center justify-center gap-5 max-md:m-5'>
                    <p className='text-lg roboto md:text-white'>
                        Y veo como LOS RESULTADOS SE CONCRETAN! <br />
                        <span className='underline'>*Somos los únicos con tasa de éxito de más del 90%!</span>
                    </p>
                    <button className='button-animate p-3 text-center text-2xl bg-[#4118f0] rounded-lg w-2/3'><h2 className='text-white roboto'>Si, quiero acceso inmediato al<br /> ENTRENAMIENTO GRATUITO<br /> <b>Los 5 TRUCOS</b></h2></button>
                </div>
            </div>
            <div className='flex flex-col w-full gap-10'>
                <h2 className='text-xl text-center'>
                    <b>En el pasado, SOLO he mostrado esta información en Webinars en <br />VIVO…</b>
                </h2>
                <p className='text-lg text-center'>
                    <b>
                        Y he cobrado MILES DE DOLARES por enseñarlo y aplicarlo…<br />
                        Es información que no vas a encontrar en internet…<br />
                        Porque la gente que la sabe se la guarda para si…<br />
                        <span className='text-xl'>Pero hoy, te vas a llevar todo este contenido de altisimo valor GRATIS…</span>
                    </b>
                </p>
                <p className='text-center'>
                    si… invirtiendo el mismo tiempo que te insume una pelicula  podras aprender los 5 <br />
                    TRUCOS <b className='underline'>que te sacarán de la frustracion de no poder mudarte</b> <br />
                    y que a mi me llevaron años aprender
                </p>
            </div>
        </div>
    )
}

export default BloqueDoce