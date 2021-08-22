  
import React from 'react'
import Classes from './navbar.module.css'
import Links from './links/links'
export const Navbar = ({Token}) => {
    return (
        <header className = {Classes.Header}>
           <Links Token = {Token} />
        </header>
    )
}