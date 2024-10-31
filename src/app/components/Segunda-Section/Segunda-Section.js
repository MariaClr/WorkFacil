import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import Swiper from "../Swiper/Swiper";
import "./Segunda.css"
import React, { useState } from 'react';


export default function SegundaSection(){
    
   
    return (<>
    <section className='vagas'>
        <h2>Principais Vagas</h2>
        <div className='container-cards'>

            
            <div className='cards'>
                <ArrowLeftIcon className="size-7 teste " />
                <Swiper/>
                <ArrowRightIcon className='size-7 teste'/>
            </div>
            <div className='div-botao-card'>
                <a>Ver Mais</a>
            </div>
        </div>
    </section>
    </>)
}