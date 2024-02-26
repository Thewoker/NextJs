import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./styles.css"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

export function MPButton({ product }) {
    const [url, setUrl] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // a partir de aca modifico todo deam
        initMercadoPago(process.env.NEXT_PUBLIC_KEY, { locale: 'es-CL' });
        const generatedLink = async () => {
            try {
                console.log(product)
                const { data: preference } = await axios.post('api/checkout', product);
                
                setUrl(preference.url)
            } catch (error) {
                console.error(error)
            }

            setLoading(false);
        };

        generatedLink()
    }, [product])


    return (
        <div>
            {loading ? (
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-white text-[15px] dot button'>
                        Loading
                        <span className='dot' style={{ '--i': 0 }}>.</span>
                        <span className='dot' style={{ '--i': 1 }}>.</span>
                        <span className='dot' style={{ '--i': 2 }}>.</span>
                    </h2>
                </div>
            ) : (
                <>
                    <a href={url} className='px-4 py-2 rounded bg-blue-500 text-white font-medium button cursor-pointer'>Comprar Ahora</a>
                </>
            )}
        </div>
    )
}
