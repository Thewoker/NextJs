import React from 'react'
import "../los-5-trucos/main-landing-2.css"
import MentUno from "@/components/Landing-4/MentUno"
import MentDos from "@/components/Landing-4/MentDos"
import MentTres from "@/components/Landing-4/MentTres"
import BloqueSiete from '@/components/Landing-3/BloqueSiete'
import BloqueTrece from '@/components/Landing-2/Slide-13/BloqueTrece';
import BloqueQuince from '@/components/Landing-2/Slide-15/BloqueQuince';
import BloqueDiezYSeis from '@/components/Landing-2/Slide-16/BloqueDiezYSeis';
import BloqueDiezYSiete from '@/components/Landing-2/Slide-17/BloqueDiezYSiete';
import BloqueDiezYOcho from '@/components/Landing-2/Slide-18/BloqueDiezYOcho';
import BloqueDiezYNueve from '@/components/Landing-2/Slide-19/BloqueDiezYNueve';
import BloqueVeinte from '@/components/Landing-2/Slide-20/BloqueVeinte';
import Ment4 from '@/components/Landing-4/Ment4'
import BloqueOnce from '@/components/Landing-2/Slide-11/BloqueOnce';
import BloqueSeisPlus from '@/components/Landing-3/BloqueSeisPlus'
import Footer from '@/components/Landing-3/Footer'
import "./landing-4.css"


function page() {
  return (
    <div className="overflow-x-hidden sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <MentUno />
      <MentDos />
      <BloqueSiete />
      <MentTres />
      <div className="md:mb-20 max-md:mb-10">
        <BloqueTrece />
      </div>
      <div className="md:mb-20 max-md:mb-10">
        <BloqueQuince />
      </div>
      <div className="md:mb-20 max-md:mb-10">
        <BloqueDiezYSeis />
      </div>
      <div className="md:mb-20 max-md:mb-10">
        <BloqueDiezYSiete />
        <BloqueDiezYOcho />
      </div>
      <div className="md:mb-20 max-md:mb-10">
        <BloqueDiezYNueve />
      </div>
      <div className="md:mb-20 max-md:mb-10">
        <BloqueVeinte />
      </div>
      <Ment4 />
      <MentDos />
      <BloqueOnce />
      <BloqueSeisPlus />
      <Footer />
    </div>
  )
}

export default page