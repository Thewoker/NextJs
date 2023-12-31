import React from 'react'

function Footer() {
    return (
        <div>
            <div className='w-full h-3/5 flex justify-center items-center bg-[#f45700]'>
                <div className='w-full max-h-[30vh] flex justify-center'>
                    <a href="https://www.linkedin.com/in/leonel-fernando-jara-ravarotto-b1836a21a/" target="_blank" className='flex justify-center items-center'>
                        <img src="/imgs/linkedin.svg" alt="LinkedIn Logo" width={50} />
                        <p className='footer-text'>Make it by:<br />Leonel Fernando Jara Ravarotto</p>
                    </a>
                    <div className='flex justify-center items-center'>
                        <img src="imgs/TWEB-LABS-Logo-BigCommerce-Store-Logo-with-Transparent-Background.png" alt="" width={200} />
                        <p className='footer-text'>TWeb Labs Corporation © 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer