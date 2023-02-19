import React from 'react';
import './Navbar.css'
import {BsFacebook,BsInstagram,BsWhatsapp} from 'react-icons/bs'
import {Logo} from '../Logo'
import {GiHamburgerMenu} from 'react-icons/gi';

import { useState } from 'react';

 

const NavBar = () => {

    const [ver,setVer]= useState(false)

   

    return(
        <header className='contenedorNav'>
            
          
           <Logo/>
            <div className= {`nav_items ${ver && 'open'}`}>
                <div className='contenedor_a'>
                    <a className='aNavbar' href="#Hero">Sobre mí</a>
                    <a className='aNavbar' href="#servicios">Servicios</a>
                    <a className='aNavbar' href="#Portfolio">Portfolio</a>
                    <a className='aNavbar' href="#Opiniones">Opiniones</a>
                    <a className='aNavbar' href="#Contacto">Contacto</a>
                </div>
                <div className='contenedor_redes'>
                
                    <a href="https://www.facebook.com/profile.php?id=100090075738822" target='_blank' rel="noreferrer" className='redes_hover'><BsFacebook className='redes'/></a>
                    <a href="https://www.instagram.com/dariovarcaz/" target='_blank' rel="noreferrer" className='redes_hover'><BsInstagram className='redes'/></a>
                    <a href="https://wa.me/5491138842605/?text=Hola, quería consultarte..." target="_blank" rel="noreferrer" className='redes_hover'><BsWhatsapp className='redes'/></a>

                </div>
            </div>
            <div className='hamburguesa' onClick={()=>setVer(!ver)}>
                    <GiHamburgerMenu/>
                     
            </div>
        </header>
    )
}
export { NavBar }