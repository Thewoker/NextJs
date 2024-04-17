"use client"
import React, { useState, useEffect } from 'react';
import famousQuotes from '@/public/main-page/phrases.json';
import "./carousel.css";

function Carousel() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [showQuote, setShowQuote] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowQuote(false);
            setTimeout(() => {
                setCurrentQuoteIndex((prevIndex) => 
                    prevIndex + 1 === famousQuotes.length ? 0 : prevIndex + 1
                );
                setShowQuote(true);
            }, 1000); // Espera 1 segundo para cambiar la cita, coincidiendo con la duración de la transición
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentQuote = famousQuotes[currentQuoteIndex];

    return (
        <div className="carousel-container flex w-full justify-center items-center bg-[#d6fd51]">
            <p className={`text-center carousel-quote ${showQuote ? 'show' : ''}`}>
                <span><b>{currentQuote.author}</b></span>: {currentQuote.phrase}
            </p>
        </div>
    );
}

export default Carousel;