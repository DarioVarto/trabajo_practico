import React from 'react';
import './Navbar.css'
import {BsFacebook,BsInstagram,BsWhatsapp} from 'react-icons/bs'
import {Logo} from '../Logo'
import {GiHamburgerMenu} from 'react-icons/gi';
import {motion} from 'framer-motion'

import { useState } from 'react';

 

const NavBar = () => {

    const [ver,setVer]= useState(false)

    const verNav={
        noVer:{y:'-60px',opacity:0},
        ver:{y:'0px',opacity:1,
        transition:{delay:0.5,duration:2} },
    }
  

    return(
            <header className='contenedorNav'>
                    <Logo/>
                    
                    <div className= {`nav_items ${ver && 'open'}`}>
                    
                        <motion.div  className='contenedor_a'
                        variants={verNav}
                        initial='noVer'
                        animate='ver'
                        >

                            <a className='aNavbar' href="#Hero">Sobre mí</a>
                            <a className='aNavbar' href="#servicios">Servicios</a>
                            <a className='aNavbar' href="#Portfolio">Portfolio</a>
                            <a className='aNavbar' href="#Opiniones">Opiniones</a>
                            <a className='aNavbar' href="#Contacto">Contacto</a>
                        </motion.div>
                        <motion.div className='contenedor_redes'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:2}} 
                        >
                
                        <a href="https://www.facebook.com/profile.php?id=100090075738822" target='_blank' rel="noreferrer" className='redes_hover'><BsFacebook className='redes'/></a>
                        <a href="https://www.instagram.com/dariovarcaz/" target='_blank' rel="noreferrer" className='redes_hover'><BsInstagram className='redes'/></a>
                        <a href="https://wa.me/5491138842605/?text=Hola, quería consultarte..." target="_blank" rel="noreferrer" className='redes_hover'><BsWhatsapp className='redes'/></a>

                        </motion.div>
                    </div>
            
                    <div className='hamburguesa' onClick={()=>setVer(!ver)}>   
                    
                        <motion.div
                        variants={verNav}
                        initial='noVer'
                        animate='ver'
                        >
                            <GiHamburgerMenu/>
                        </motion.div>
                    </div>
            </header>
    )
}
export { NavBar }