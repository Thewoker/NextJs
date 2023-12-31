"use client"
import React from 'react';
import Link from "next/link";
import './contact.css'

function Contact() {
    const email = 'leoneljararavarotto@hotmail.com';

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <div>
            <div className='w-full min-h-[50vh] h-3/5 flex justify-center items-center bg-[#f45700]'>
                <button onClick={handleEmailClick} className='w-[50%] max-h-[50vh] align-middle'>
                    <div className='icon'>
                        <h4 className='text-center'>Send a Email</h4>
                        <div className='flex justify-center'>
                            <img src="/imgs/mail.svg" alt="Email" width={50} />
                        </div>
                    </div>
                </button>
                <a href="https://wa.me/5493624725787" target="_blank" className=' w-[50%] max-h-[50vh] align-middle'>
                    <div className='icon'>
                        <h4 className='text-center'>Send a Whatsapp</h4>
                        <div className='flex justify-center'>
                            <img src="/imgs/whatsapp.svg" alt="Email" width={50} />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Contact