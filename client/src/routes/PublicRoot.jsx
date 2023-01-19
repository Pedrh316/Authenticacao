import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

const PublicRoot = () => {
  return (
    <>
        <Navbar>
            <Link to="/" className='logo'>Início</Link>
            <div className="right">
                <NavLink to="/login" className={({isActive}) => isActive ? 'actived' : ''}>Login</NavLink>
                <NavLink to="register" className={({isActive}) => isActive ? 'actived' : ''}>Register</NavLink>
            </div>
        </Navbar>
        <div className="container">
            <Outlet/>
        </div>
    </>
  )
}

export default PublicRoot