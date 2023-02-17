import React from 'react';
import './Hero.css'
import Img_Hero from '../../assets/imagenes/img_hero.png'

const Hero = () => {
    
    return(
        <div className='contenedor_hero' id='Hero'>
           
            <div className='contenedoorTexto'>
                <span className='span_bienvenido'>¿Quién soy?</span>
                <h1 className='nombre_hero'>Darío Vartolo</h1>
                <h3 className='profesion_hero'>Diseñador web/Profesor de matemática</h3>
                    <div>
                    <p className='texto_hero'>Desarrollador web desde el año 2022/2023. Diplomatura en programación web Full Stack Developer. <span>UTN</span></p>
                    <p className='texto_hero'>Profesor de matemática desde el año 2007 ejerciendo hasta la fecha</p>
                    <p className='texto_hero'>Estudiante de licenciatura en folklore desde el año 2008 al 2020 en la universidad nacional del arte <span>UNA</span></p>
                    </div>
                    <div className='contenedor_btn'>
                        <button className='btn_hero'><a href="https://wa.me/5491138842605/?text=Hola, dime en que horario puedo llamarte para realizar una entrevista" target="_blank">Contratar</a></button>
                        <button className='btn_hero btn_hero_margin'><a href='https://github.com/DarioVarto' target="_blank" >Explorar</a></button>
                    </div>
                    

            </div>
            
            <div className='contenedorImagen_shape'>
                <div className='contenedor_img_hero'>
               
                    <img className='img_hero' src={Img_Hero} alt="" />
                </div>  

                         
            </div>

        </div>
    )
}

export { Hero }