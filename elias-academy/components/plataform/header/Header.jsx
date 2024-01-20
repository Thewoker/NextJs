import React from 'react'
import Button from '@/components/ui/button/Button';

function Header() {
    return (
        <div className='flex flex-row justify-end items-start'>
                <Button content="Mi Perfil" width="96px" height="48px"/>
                <Button content="Cerrar sesión" width="144px" height="48px"/>

        </div>
    )
}

export default Header