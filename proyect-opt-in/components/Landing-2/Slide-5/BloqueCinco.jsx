import React from 'react'

function BloqueCinco() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center justify-center gap-20 md:px-24 max-md:flex-wrap max-md:h-full'>
            <div className='w-full flex justify-center items-center bg-[#1a1da0] p-3'>
                <h2 className='text-white bentham text-4xl text-center'>Tome una decision para siempre. <br /><span className='underline'>ESTO NO ME VOLVERIA A PASAR NUNCA MAS</span></h2>
            </div>
            <p className='text-center roboto max-md:px-10'>En ese momento yo seguía trabajando en la industria de las bebidas, pero por mero desafío profesional empecé a recorrer  muchas inmobiliarias y a hablar con decenas de agentes para entender quien tenia un método mas innovador y mas eficiente que el que me había tocado<br />En mis mediodías y también los sábados visitaba departamentos, locales comerciales que no iba a comprar, solo  para ver sus métodos cada semana..una y otra vez..durante AÑOS..</p>
            <h3 className='text-center underline text max-md:text-xl md:text-2xl max-md:px-10'><b>Tanto camine que el mercado Inmobiliario me empezó a cautivar.<br />Veía una gigantesca posibilidad allí.<br />Un mercado con métodos de venta viejos y mediocres</b></h3>
            <div className='w-full grid grid-cols-3 gap-3'>
                <div className='flex max-md:col-span-3 justify-center items-center h-[150px] bg-[#1a1da0] p-3'><p className='text-center text-white'>Termine ingresando en una inmobiliaria en la cual dure muy pocos meses, no podía creer el destrato hacia los clientes.<br />Me cambie a otra, y a otra</p></div>
                <div className='flex max-md:col-span-3 justify-center items-center h-[150px] bg-[#1a1da0] p-3'><p className='text-center text-white'><b>Contraté Coaches, compré Cursos, lei muchísimo.. y empecé a<br />entrevistarme con agentes e inmobiliarias de todo el mundo.</b></p></div>
                <div className='flex max-md:col-span-3 justify-center items-center h-[150px] bg-[#1a1da0] p-3'><p className='text-center text-white'>Cada persona que entreviste (sobre todo del exterior) me empezó a dar <br />una pista para armar un sistema de venta de excelencia</p></div>
            </div>
        </div>
    )
}

export default BloqueCinco