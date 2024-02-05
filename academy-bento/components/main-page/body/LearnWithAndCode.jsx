import React from 'react'

function LearnWithAndCode() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='py-10'>
                <div className='flex w-full justify-center items-center'>
                    <div className='w-[45vw] flex justify-center items-center talk-people'>
                        <img src="/imgs/main-page/talk-people.png" alt="" className='' />
                    </div>
                    <div className='w-[55vw] learn-coop flex flex-col justify-center items-center'>
                        <h3>Aprende junto a tus compañeros</h3>
                        <p className='w-[50%]'>¿Te gustaría complementar tus conocimientos y resolver dudas con tus propios compañeros?
                            Nosotros tenemos la solución, en FreshmanU ofrecemos un foro donde estarán las preguntas más destacadas de los ramos y podran responderlas cualquier alumno, de esta manera, no dependerás solamente del tutor para recibir una respuesta rápida y adecuada.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='py-10 px-12 flex flex-col justify-center items-center w-full'>
                <h3 className='title-code mb-9'>Código FreshmanU</h3>
                <div className='flex flex-col flex-wrap'>
                    <div className='flex flex-row w-full justify-center items-center'>
                        <div className='card-code left-code-card w-[53vw] flex flex-col justify-center items-center p-12'>
                            <h3 className='p-12'>
                                ¿Qué es el código FreshmanU?
                            </h3>
                            <p>
                                Queremos ofrecerte los mejores beneficios, por esta razón, al inscribirte en algún curso de FreshmanU, recibirás un código que te permitirá obtener un curso gratis.
                            </p>
                            <img src="/imgs/main-page/cod-afil-1.png" alt="" className='img-one p-3'/>
                        </div>
                        <div className='card-code right-code-card w-[40vw] flex flex-col justify-center items-center p-12'>
                            <h3 className='p-12'>
                                ¿Cómo funciona?
                            </h3>
                            <p>
                                Invita a 5 amigos a inscribirse a cualquier curso con tu código personal, si todos tus amigos se inscriben, ganarás un curso totalmente gratis.
                            </p>
                            <img src="/imgs/main-page/cod-afil-2.png" alt="" className='img-two p-3' />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default LearnWithAndCode