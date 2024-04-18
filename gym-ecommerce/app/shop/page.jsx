import React from 'react'
import "./shop.css"

function Page() {
    return (
        <div className='flex flex-col min-w-full min-h-screen h-full justify-center items-center relative'>
            <div className='absolute top-0 w-full'>
                <div className='bg-img-shop flex justify-center items-center h-[70vh] p '>
                    <h1 className='shop-title text-white'>Tienda</h1>
                </div>
            <div className='px-[15%]'>
                <div>

                    <p>Filtra por precio</p>

                    <p>Precio: ${} - ${}</p>
                </div>
                <div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Page