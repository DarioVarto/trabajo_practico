import React from 'react';
import './Hero.css'
import Img_Hero from '../../assets/imagenes/Img_Hero.png'
import Img_hero from '../../assets/imagenes/zyro-image.png'
import {motion} from 'framer-motion'

const efecto_hero={
oculto:{opacity:0,},
visible:{opacity:1,
    transition:{delay:2,duration:2}},

}

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

          

                    <motion.div className='contenedor_img_hero'
                            variants={efecto_hero} 
                            initial='oculto'
                            animate='visible'
                            
                            >
                            <svg viewBox="0 15 185 192" xmlns="http://www.w3.org/2000/svg" className='shp'>
                                    <path fill="#FF4900" d="M38.5,-45.8C53.2,-33.5,70.8,-24.5,74.6,-11.8C78.5,0.9,68.6,17.4,59,34C49.3,50.5,39.9,67.1,24.8,76.2C9.6,85.2,-11.2,86.7,-24.3,77.4C-37.4,68,-42.6,47.8,-51.9,30.5C-61.3,13.2,-74.7,-1.1,-72.8,-13.1C-71,-25,-53.9,-34.4,-39.2,-46.7C-24.5,-59.1,-12.3,-74.3,-0.2,-74.1C11.9,-73.9,23.8,-58.2,38.5,-45.8Z" transform="translate(85 100)" />
                            </svg>
                          {/*   <svg viewBox="0 -8 180 192" xmlns="http://www.w3.org/2000/svg" className='shpMq'>
                                    <path fill="#FF4900" d="M38.5,-45.8C53.2,-33.5,70.8,-24.5,74.6,-11.8C78.5,0.9,68.6,17.4,59,34C49.3,50.5,39.9,67.1,24.8,76.2C9.6,85.2,-11.2,86.7,-24.3,77.4C-37.4,68,-42.6,47.8,-51.9,30.5C-61.3,13.2,-74.7,-1.1,-72.8,-13.1C-71,-25,-53.9,-34.4,-39.2,-46.7C-24.5,-59.1,-12.3,-74.3,-0.2,-74.1C11.9,-73.9,23.8,-58.2,38.5,-45.8Z" transform="translate(100 100)" />
                            </svg> */}
                            <motion.img src={Img_Hero} alt="Imagen Darío" className='shpMq'
                            variants={efecto_hero}
                            initial='oculto'
                            animate='visible'
                            />

                            <motion.div className="contenedor_imagen"
                            variants={efecto_hero}
                            initial='oculto'
                            animate='visible'
                            >
                                <img src={Img_hero} alt="Imagen Darío" className='img_hero'/>
                    </motion.div>
    

                         
                    </motion.div> 

        </div>
    )
}

export { Hero }