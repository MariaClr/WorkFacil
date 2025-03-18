import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import Swiper from "../Swiper/Swiper";
import "./Segunda.css"
import { useContext } from 'react';
import { UserContext } from '@/app/context/userContext';


export default function SegundaSection(){
    const {user, setUser} = useContext(UserContext);
    
   
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
                {user?<a href='#'>Ver Mais</a>  :
                <a onClick={() => alert("faça seu login")} href='./login'>Ver Mais</a>}
            </div>
        </div>
    </section>
    </>)
}