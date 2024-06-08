import React from 'react'

function BloqueDos() {
    return (
        <div className='min-h-screen md:px-24 md:pt-24 max-md:flex-wrap max-md:h-full flex flex-col justify-center items-center gap-3'>
            <img src="/imgs/landing-3/garantia.jpg" className='w-1/6 h-1/6' alt="" />
            <p className='text-center text-6xl'>TRIPLE Garantía incondicional <br /> por  contrato</p>
            <div className='flex w-full gap-4'>
                <div className='bg-[#4472c4] text-white p-3 w-1/3'>
                    <h3 className='text-center text-xl'>Garantía 1</h3>
                    <p className='text-center'>
                        <b>
                            <br /><br />
                            Si no vendemos tu departamento en menos de 4 meses  TE DEVOLVEMOS EL DINERO  Y TE PAGAMOS  <br /><span className='text-3xl'><b>$ arg 150,000 </b></span><br />
                            por el tiempo que te hicimos perder.
                            <br /><br />
                            GARANTIZADO POR CONTRATO <br />
                        </b>
                    </p>
                </div>
                <div className='bg-[#4472c4] text-white p-3 w-1/3'>
                    <h3 className='text-center text-xl'>Garantía 2</h3>
                    <p className='text-center'>
                        <b>
                            <br /><br />
                            Si  DENTRO DE LOS 10 DIAS   de comprada la Mentoría te arrepentís o sentís que no es para vos,<br />
                            TE DEVOLVEMOS TU DINERO DE INMEDIATO <br /> SIN HACER PREGUNTAS.
                            <br /><br />
                            GARANTIZADO POR CONTRATO <br />
                        </b>
                    </p>
                </div>
                <div className='bg-[#4472c4] text-white p-3 w-1/3'>
                    <h3 className='text-center text-xl'>Garantía 3</h3>
                    <p className='text-center'>
                        <b>
                            <br /><br />
                            Si NO APRUEBAS NUESTRA TASACIÓN TE DEVOLVEMOS EL DINERO.
                            <br /><br /><br /><br />
                            GARANTIZADO POR CONTRATO <br />
                        </b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BloqueDos