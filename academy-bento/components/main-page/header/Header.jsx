"use client"
import React from 'react'
import Link from 'next/link'
import { useAuthContext } from "@/contexts/AuthContext"
import { useRouter } from 'next/navigation';
import './header.css'

function Header() {
    const router = useRouter();
    const { user } = useAuthContext();

    return (
        <header className='h-[12vh] header sticky-header absolute top-0 '>
            <div className="navbar flex relative">
                <div className='header-elements logo left-0 '>
                    <h3 className='logo-text'>FreshManU</h3>
                </div>
                <ul className="header-elements tags flex right-0 justify-between">
                    <li className="nav-link pl-4"><Link href="#courses">Cursos</Link></li>
                    <li className="nav-link"><Link href="#faq">F.A.Q.</Link></li>
                    <li className="nav-link"><Link href="#whochooseus">¿Por que elegirnos?</Link></li>
                    <li className="nav-link"><Link href="#contact">Contáctanos</Link></li>
                    <li className="nav-link pr-4"><Link href={user.logged && user.uid != null ? "/cursos" : "/ingresar"}>Iniciar Sesión</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header