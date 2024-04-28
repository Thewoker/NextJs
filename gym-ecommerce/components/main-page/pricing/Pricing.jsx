import React from 'react'
import { HiCheckCircle } from "react-icons/hi2";
import "./pricing.css"
import Button from '@/components/ui/button-rounded-1/Button';


function Pricing() {
    return (
        <div className='p-10 flex flex-col px-[15%] gap-10' id='planes'>
            <h2 className='text-white planes russo'>NUESTROS PLANES</h2>
            <div className='flex w-full justify-center gap-16 flex-wrap'>
                <div className=''>
                    <div className='flex flex-col w-[300px] pricing-container gap-8'>
                        <h3 className='text-white text-center title-planes russo'>Todas las doctrinas</h3>
                        <h4 className='text-white text-center price fugaz'>XXXX$<span>/MES</span></h4>
                        <div className='max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
                            <div className='flex text-white items-center text-sm'>
                                <HiCheckCircle />
                                <p className='text-white roboto'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='flex text-white items-center text-sm'>
                                <HiCheckCircle />
                                <p className='text-white roboto'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='flex text-white items-center text-sm'>
                                <HiCheckCircle />
                                <p className='text-white roboto'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='flex text-white items-center text-sm'>
                                <HiCheckCircle />
                                <p className='text-white roboto'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center p-3'>
                            <Button width="auto" height="40px" radius="75px" content="Compra ahora" />
                        </div>
                    </div>
                </div>
                <div className='vertical-line max-xl:hidden'></div> 
                <div>
                    <div className='flex flex-col w-[300px] pricing-container gap-8'>
                        <h3 className='text-white text-center title-planes russo'>Todas las doctrinas</h3>
                        <h4 className='text-white text-center price fugaz'>XXXX$<span>/DÍA</span></h4>
                        <div className='max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
                            <div className='flex text-white items-center text-sm'>
                                <HiCheckCircle />
                                <p className='text-white roboto'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='flex text-white items-center text-sm'>
                                <HiCheckCircle />
                                <p className='text-white roboto'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='flex text-white items-center text-sm'>
                                <HiCheckCircle />
                                <p className='text-white roboto'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='flex text-white items-center text-sm'>
                                <HiCheckCircle />
                                <p className='text-white roboto'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center p-3'>
                            <Button width="auto" height="40px" radius="75px" content="Compra ahora" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing