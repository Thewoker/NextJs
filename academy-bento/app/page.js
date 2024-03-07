"use client"
import { React, useState, useEffect } from 'react'
import Header from './../components/main-page/header/Header';
import Body from "@/components/main-page/body/Body";
import { usePathname } from 'next/navigation'
import { useAuthContext } from '@/contexts/AuthContext'
import { db } from '@/firebase/config'
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { toast } from 'react-toastify';
import "./stylesMainPage.css";


export default function Home() {
  const { plan, user } = useAuthContext()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const status = urlParams.get("status");

      if (db && user && user.uid) {
        //Usuario que compra
        const userRef = doc(db, 'usuarios', user.uid);
        const userSnapshot = await getDoc(userRef);
        const courseData = userSnapshot?.data();

        //Usuario afiliado

        if (status === "approved") {
          try {
            const userAfiRef = doc(db, 'usuarios', courseData.codigoAUnAfiliado);
            const userAfiSnapshot = await getDoc(userAfiRef);
            const courseAfiData = userAfiSnapshot?.data();
            const contadorActualizado = (courseAfiData?.contadorDeAfiliados ?? 0) + 1
            await updateDoc(userAfiRef, { contadorDeAfiliados: contadorActualizado })
          } catch (error) {
            console.log("La compra no tiene un usuario asociado");
          }
          await updateDoc(userRef, { cursos: arrayUnion(courseData.cursoPagado) })
          toast.success("¡Gracias por su compra!", {
            hideProgressBar: true,
          });
        } else if (status === "failure") {
          toast.error(`La compra no pudo ser concretada. \nIntentelo de nuevo`, {
            hideProgressBar: true,
          });
        }
      }
    };

    fetchData().then(setLoading(false))


  }, [user], [plan]);


  return (
    <main className="flex min-h-screen items-center justify-between">
      {loading ?
      <div className='min-h-screen h-full min-w-screen w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-white text-[50px]'>
            Loading
            <span className='dot' style={{ '--i': 0 }}>.</span>
            <span className='dot' style={{ '--i': 1 }}>.</span>
            <span className='dot' style={{ '--i': 2 }}>.</span>
          </h2>
        </div> 
      </div> :
        <>
          <Header />
          <Body />
        </>

      }
    </main>
  );
}
