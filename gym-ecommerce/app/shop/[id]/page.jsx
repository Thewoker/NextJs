import React from 'react'
import "./product.css"
import Button from '@/components/ui/button-rounded-2/Button'

function Page() {
    return (
        <div className='flex min-w-screen min-h-screen flex-col justify-center items-center px-[5vw] py-[15vh]'>
            <div className='flex w-full max-lg:flex-col justify-center product-container'>
                <div className='flex flex-col justify-center items-center gap-3 max-lg:w-full w-[70vw]'>
                    <img src="https://acdn.mitiendanube.com/stores/001/794/669/products/asad1-e4eaa2c1e3ea8d008d16272882975948-1024-1024.webp" alt="" className='h-[500px] w-[500px]' />
                    <div className='flex gap-3'>
                        <img src="https://acdn.mitiendanube.com/stores/001/794/669/products/asad1-e4eaa2c1e3ea8d008d16272882975948-1024-1024.webp" alt="" className='h-[100px] w-[100px]' />
                        <img src="https://acdn.mitiendanube.com/stores/001/794/669/products/asad1-e4eaa2c1e3ea8d008d16272882975948-1024-1024.webp" alt="" className='h-[100px] w-[100px]' />
                        <img src="https://acdn.mitiendanube.com/stores/001/794/669/products/asad1-e4eaa2c1e3ea8d008d16272882975948-1024-1024.webp" alt="" className='h-[100px] w-[100px]' />
                    </div>
                </div>
                <div className='flex w-full justify-center'>
                    <div className='w-[30vw] flex flex-col gap-6 max-lg:w-[70vw] max-lg:py-10'>
                        <h1 className='text-[#F3F3F3] product-title'><b>Proteína en polvo</b></h1>
                        <h2 className='product-price text-[#F3F3F3]'>$ 9.99</h2>
                        <p className='text-[#C9C9C9] product-description'>Proteína de suero de leche de alta calidad para apoyar el crecimiento muscular y la recuperación.</p>
                        <div className='flex justify-between px-10'>
                            <div className='flex gap-3 product-quantity'>
                                <button className='text-[#F3F3F3]'>-</button>
                                <p className='text-[#F3F3F3]'>1</p>
                                <button className='text-[#F3F3F3]'>+</button>
                            </div>
                            <p className='product-quantity'><b>100</b></p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Button width="auto" height="40px" radius="75px" content="Comprar Ahora" padding="px-1" bgColor="bg-white" />
                        </div>
                    </div>
                </div>
            </div>
            {/* In the future, maybe i put here interesting products */}
            <div></div>
        </div>
    )
}

export default Page