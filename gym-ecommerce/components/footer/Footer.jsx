import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "./footer.css"

function Footer() {
    return (
        <div className='flex w-full flex-wrap justify-between max-md:justify-center max-sm:gap-5 items-center h-[10vh] px-[15%] footer'>
            <div className='text-white flex items-center gap-2 max-lg:pl-20 max-sm:pl-16'>
                <FaLinkedin size={30}/>
                <div className='flex flex-col'>
                    <h5 className='text-white text-xs'>Make it by:</h5>
                    <p className='text-white text-xs max-sm:text-balance'>Leonel Fernando Jara Ravarotto</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <h2 className='text-white'>GYMTEAM</h2>
                <p className='text-white'>X</p>
                <img src="/main-page/TWEB-LABS-Logo-BigCommerce-Store-Logo-with-Transparent-Background.png" className="h-full w-28" alt="" />
            </div>
            <p className='text-white'>TWeb Labs Corporation © 2024</p>
        </div >
    )
}

export default Footer