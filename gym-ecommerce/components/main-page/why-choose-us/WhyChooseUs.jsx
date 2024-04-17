import React from 'react'
import Carousel from './carousel/Carousel';
import Card from './carousel/Card';
import "./styles.css"


function WhyChooseUs() {


    return (
        <div className='flex flex-col min-w-full justify-center items-center'>
            <Carousel />
            <div className='flex flex-col w-full px-[15%]'>
                <h2 className='title-why-chooose-us'>¿Por qué Elegirnos?</h2>
                <div className='flex flex-wrap justify-between items-center'>
                    <Card imgURL="Dumbell_01.png" title="PowerLifting " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus quam aliquid, asperiores quo alias est explicabo numquam repellat architecto?"/>
                    <Card imgURL="Gym Bottle_01.png" title="Crossfit " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus quam aliquid, asperiores quo alias est explicabo numquam repellat architecto?"/>
                    <Card imgURL="Handgrip_01.png" title="Calistenia" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus quam aliquid, asperiores quo alias est explicabo numquam repellat architecto?"/>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs