"use client";

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


const MercadoPagoButton = ({ product }) => {
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    initMercadoPago('TEST-a9251489-cc9f-4e72-a6d4-6dfc727f4ae5', { locale: "es-CL" });

    console.log(product);

    const createPreference = async () => {
        try {
            const response = await axios.post('/api/checkout', {
                title: product.titulo,
                quantity: 1,
                price: product.precio,
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error)
        }
    }

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setUrl(id);
        }
    }

    return (
        <div>
            {
                loading ? (
                    <button>
                        cargando
                    </button>
                ) : (
                    <>
                        <div id="wallet_container">
                            <button onClick={() => handleBuy()}>
                                Comprar
                            </button>
                            {url && <Wallet initialization={{ preferenceId: url }} />}
                        </div>
                        {/* <a href={url}>Comprar ahora</a> */}
                    </>
                )
            }
        </div>
    )
}

export default MercadoPagoButton