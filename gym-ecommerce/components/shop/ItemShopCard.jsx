import React from 'react'
import "./itemCard.css"

function ItemShopCard() {
    return (
        <div className='item-card-container'>
            <div className='card-img-container '>
                <img src="https://acdn.mitiendanube.com/stores/001/794/669/products/asad1-e4eaa2c1e3ea8d008d16272882975948-1024-1024.webp" alt="" />
            </div>
            <div className='info-card-container bg-white'>
                <h2 className='title-item-card'>Proteína en polvo</h2>
                <p className='price-item-card'>$ 9.99</p>
            </div>
        </div>
    )
}

export default ItemShopCard