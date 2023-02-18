import React from 'react';
import './MenuHamburguesa.css';
import {BsFacebook,BsInstagram,BsWhatsapp} from 'react-icons/bs'

const MenuHamburguesa = () => {
    return(
        <div className='menu'>
            <ul>
                <li><a className='a_hamburguesa' href="#Hero">Acerca de mí</a></li>
                <li><a className='a_hamburguesa' href="#servicios">Servicios</a></li>
                <li><a className='a_hamburguesa' href="#Portfolio">Portfolio</a></li>
                <li><a className='a_hamburguesa' href="#Opiniones">Opiniones</a></li>
                <li><a className='a_hamburguesa' href="#Contacto">Contacto</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100090075738822" target='_blank' rel="noreferrer" className='redes_hover'>Facebook<BsFacebook className='a_hamburguesa'/></a></li>
                <li><a href="https://www.instagram.com/dariovarcaz/" target='_blank' rel="noreferrer" className='redes_hover'>Instagram<BsInstagram className='a_hamburguesa'/></a></li>
                <li><a href="https://wa.me/5491138842605/?text=Hola, quería consultarte..." target="_blank" rel="noreferrer" className='redes_hover'>Whatsapp<BsWhatsapp className='a_hamburguesa'/></a></li>
            </ul>
        </div>
    )
}

export { MenuHamburguesa }

                
                




