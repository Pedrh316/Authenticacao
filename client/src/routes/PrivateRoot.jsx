import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const PrivateRoot = () => {
    return (
        <>
            <Navbar>
                <NavLink to="/" className={({isActive}) => isActive ? 'actived' : ''}>Início</NavLink>
                <div className="right">
                    <NavLink to="/about" className={({isActive}) => isActive ? 'actived' : ''}>Sobre mim</NavLink>
                    <NavLink to="/register" className={({isActive}) => isActive ? 'actived' : ''}>Registrar</NavLink>
                </div>
            </Navbar>
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}

export default PrivateRoot;