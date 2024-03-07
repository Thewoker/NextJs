import React from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config"

function page() {

async function getUserIdFromPayment() {
    try {
        let user = null;

        // Esperar a que el estado de autenticación cambie para obtener el usuario actual
        await new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                user = currentUser;
                console.log(user);
                unsubscribe(); // Detener la escucha una vez que se obtenga el usuario
                resolve();
            }, reject);
        });

        if (user) {
            // Aquí puedes acceder al UID del usuario
            const userId = user.uid;
            return userId;
        } else {
            // El usuario no está autenticado
            console.log('esto no funcionaaaa');
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el UID del usuario:", error);
        throw error;
    }
}

const usuario = getUserIdFromPayment()
// console.log(usuario, "golaaaa");


    return (
        <div>page</div>
    )
}

export default page