import React from 'react'
import Link from 'next/link'

function Course() {
    return (
        <div className='p-10 flex flex-col w-full'>
            <div className='box-container w-full flex flex-row justify-between items-center flex-wrap'>
                {/* Box 1 */}
                <div className='large-box box-1 relative '>
                    <div className='top-0 absolute flex w-full light-blue-bar-courses justify-center items-center'>¡Curso con un 20% de descuento!</div>
                    <div className='flex justify-center items-center pt-7 pb-3'>
                        <h2 className='include'>
                            Planes
                        </h2>
                    </div>
                    <p className='p-4'>Incluye: </p>
                    <ul className='p-4 pl-9 list-include'>
                        <li>+50 videos explicativos de la materia.</li>
                        <li>Ejercicios de pruebas y exámenes de años anteriores.</li>
                        <li>Tips para enfrentar de la mejor manera tus pruebas y exámenes.</li>
                        <li>Foros de consulta para resolver tus dudas directamente con tus tutores.</li>
                    </ul>
                    <h3 className='p-2 des-ben-mas'>¡Descuentos, beneficios y mucho más!</h3>
                    <div className='flex justify-center items-center'>
                        <img src="/imgs/main-page/calculo-1-main.png" alt="" className='cal-1-main' />
                    </div>
                </div>
                {/* Box 2 */}
                <div className='large-box box-2 relative about'>
                    <div className='top-0 absolute flex w-full light-blue-bar-courses justify-center items-center'>¡Queremos lo mejor para ti!</div>
                    <div className='flex justify-center items-center pt-7 pb-3'>
                        <h2 className='about'>
                            Acerca de los planes
                        </h2>
                    </div>
                    <p className='p-4 about-course'>Este curso intensivo te equipa con todo lo necesario para sobresalir en las interrogaciones de tus materias. Cubriendo los temas clave del ramo, nos enfocamos en: </p>
                    <ol className='p-10 py-4 about-course'>
                        <li>Práctica Intensiva: Resolución de ejercicios reales de interrogaciones pasadas.</li>
                        <li>Consejos de Tutores: Aprende estrategias y tips directamente de ex ayudantes del ramo.</li>
                        <li>Preparación especializada para tus interrogaciones.</li>
                    </ol>
                    <p className='p-4 about-course'>Prepárate para enfrentar tus exámenes con conocimiento y confianza.</p>
                    <div className='flex justify-center items-center'>
                        <img src="/imgs/main-page/calc-1.png" alt="" />
                    </div>
                </div>
                {/* Box 3 y4 */}
                <div className='flex flex-col gap-16'>
                    <div className='short-box box-3 relative'>
                        <div className='top-0 absolute flex w-full light-blue-bar-courses justify-center items-center'>Plan Semestral</div>
                        <p className='desc-price mt-10 p-1 inline-block'>Plan Standard <del>$ 69.990 CLP</del></p>
                        <div className='flex flex-col justify-center items-center m-5 gap-4'>
                            <h3 className='sem-title'>Plan FreshmanU $ 49.990 CLP</h3>
                            <Link href="#"><button className='sem-button'>Quiero inscribirme</button></Link>
                        </div>
                    </div>
                    <div className='short-box box-4 relative'>
                        <div className='top-0 absolute flex w-full light-blue-bar-courses justify-center items-center'>Plan Mensual</div>
                        <p className='desc-price mt-10 p-1 inline-block'>Plan Standard <del>$ 19.990 CLP</del></p>
                        <div className='flex flex-col justify-center items-center m-5 gap-4'>
                            <h3 className='sem-title'>Plan FreshmanU $ 14.990 CLP</h3>
                            <Link href="#"><button className='sem-button'>Quiero inscribirme</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='titles-inter'>
                <div className='flex flex-row p-10'>
                    <h3>
                        ¿No estás seguro de <span className='text-[#04E1FF]'>cuál plan escoger?</span>
                    </h3>
                    <h3>
                        ¿Quieres preparar <span className='text-[#04E1FF]'>solamente una interrogación</span>?
                    </h3>
                </div>
                <div className='flex flex-row flex-wrap w-full'>
                    <div className='flex flex-col gap-20 p-10 w-[40%]'>
                        <h3>Planes específicos para interrogaciones:</h3>
                        <img src='/imgs/main-page/calculo-1-interrogacion.png' />
                    </div>
                    <div className='flex flex-row flex-wrap gap-10 w-[55vw] justify-center items-center'>
                        <div className='inter-box flex flex-col justify-center items-center gap-5'>
                            <h3 className='inter-box-title'>¡Prepara la I1!</h3>
                            <p className='inter-box-text p-2'>Este plan te permite tener acceso a todos los videos preparativos para la interrogación I del ramo.</p>
                            <p className='inter-box-price'>Plan FreshmanU $ 9.990 CLP</p>
                            <Link href="#"><button className='sem-button'>Quiero inscribirme</button></Link>
                        </div>
                        <div className='inter-box flex flex-col justify-center items-center gap-5'>
                            <h3 className='inter-box-title'>¡Prepara la I1!</h3>
                            <p className='inter-box-text p-2'>Este plan te permite tener acceso a todos los videos preparativos para la interrogación I del ramo.</p>
                            <p className='inter-box-price'>Plan FreshmanU $ 9.990 CLP</p>
                            <Link href="#"><button className='sem-button'>Quiero inscribirme</button></Link>
                        </div>
                        <div className='inter-box flex flex-col justify-center items-center gap-5'>
                            <h3 className='inter-box-title'>¡Prepara la I1!</h3>
                            <p className='inter-box-text p-2'>Este plan te permite tener acceso a todos los videos preparativos para la interrogación I del ramo.</p>
                            <p className='inter-box-price'>Plan FreshmanU $ 9.990 CLP</p>
                            <Link href="#"><button className='sem-button'>Quiero inscribirme</button></Link>
                        </div>
                        <div className='inter-box flex flex-col justify-center items-center gap-5'>
                            <h3 className='inter-box-title'>¡Prepara la I1!</h3>
                            <p className='inter-box-text p-2'>Este plan te permite tener acceso a todos los videos preparativos para la interrogación I del ramo.</p>
                            <p className='inter-box-price'>Plan FreshmanU $ 9.990 CLP</p>
                            <Link href="#"><button className='sem-button'>Quiero inscribirme</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <hr />
            </div>
        </div>
    )
}

export default Course