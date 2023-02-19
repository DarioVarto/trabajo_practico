import React from 'react';
import './Footer.css';
import {Logo} from '../Logo'
import {BsFacebook,BsInstagram,BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
    return(
        <footer>
            <div className='info_footer'>
            <Logo className='LogoFooter'/>

            <div className='contenedor_a_Footer'> 
            <div>
                <a className='aFooter' href="#Hero">Acerca de mí</a>
                <a className='aFooter' href="#servicios">Servicios</a>
                </div>
                <div>
                <a className='aFooter' href="#Portfolio">Portfolio</a>
                <a className='aFooter' href="#Opiniones">Opiniones</a>
                <a className='aFooter' href="#Contacto">Contacto</a>
                </div>
            </div>
            <div className='contenedor_redes redes_footer'>
            <a href="https://www.facebook.com/profile.php?id=100090075738822" target='_blank' rel="noreferrer" className='redes_hover'><BsFacebook className='redes iconos_redes_footer'/></a>
                <a href="https://www.instagram.com/dariovarcaz/" target='_blank' rel="noreferrer" className='redes_hover'><BsInstagram className='redes iconos_redes_footer'/></a>
                <a href="https://wa.me/5491138842605/?text=Hola, quería consultarte..." target="_blank" rel="noreferrer" className='redes_hover'><BsWhatsapp className='redes iconos_redes_footer'/></a>
            </div>
            </div>
           
            <div className='copy'>
                       <p> Copyright © Vartolo Darío 2023 </p>
                       
            </div>
        </footer>
    )
}

export { Footer }