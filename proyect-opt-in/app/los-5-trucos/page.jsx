import React from 'react'
import MainLanding2 from '@/components/Landing-2/MainLanding2';
import BloqueDos from '@/components/Landing-2/Slide-2/BloqueDos';
import BloqueTres from './../../components/Landing-2/Slide-3/BloqueTres';
import "./main-landing-2.css"
import BloqueCuatro from '@/components/Landing-2/Slide-4/BloqueCuatro';
import BloqueCinco from '@/components/Landing-2/Slide-5/BloqueCinco';
import BloqueSeis from './../../components/Landing-2/Slide-6/BloqueSeis';
import BlouqeSiete from '@/components/Landing-2/Slide-7/BlouqeSiete';
import BloqueOcho from '@/components/Landing-2/Slide-8/BloqueOcho';

function page() {

    return (
        <div className='max-w-screen overflow-x-hidden slider'>
            <MainLanding2 />
            <BloqueDos/>
            <BloqueTres/>
            <BloqueCuatro/>
            <BloqueCinco/>
            <BloqueSeis/>
            <BlouqeSiete/>
            <BloqueOcho/>
        </div>
    )
}

export default page