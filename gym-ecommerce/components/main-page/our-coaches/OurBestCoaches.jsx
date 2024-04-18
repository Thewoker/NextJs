"use client"
import React, { Component } from 'react';
import "./our-coaches.css"
import Card from './carousel/Card'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function OurBestCoaches() {
  return (
    <div className='pt-14'>
      <div className='flex flex-col w-full h-[60vh] px-[15%] justify-center bg-[#1c1c1c] our-coaches'>
        <h2 className=''>Nuestros entrenadores profesionales</h2>
        <p className='pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam dignissimos repellat doloremque sint modi nesciunt inventore nemo ducimus mollitia.</p>
        <div className=''>
          <Carousel autoPlay="true" centerMode="true" centerSlidePercentage={30} infiniteLoop>
            <Card title="Lesley Lloyd" description="Crossfit Coach" imgURL="person1.jpg" />
            <Card title="Cecile Lawson" description="Crossfit Coach" imgURL="person2.jpg" />
            <Card title="Russell Ponce" description="Powerlifting Coach" imgURL="person3.jpg" />
            <Card title="Henry Brown" description="Calistenia Coach" imgURL="person4.png" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default OurBestCoaches