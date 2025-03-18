"use client"
import { useContext } from "react"
import "./primeiraSection.css"
import { UserContext } from "@/app/context/userContext.js"
export default function PrimeiraSection(){
    const {user, setUser} = useContext(UserContext)
    return (<>
    <section className="primeira-secao">
        <div className="infor">
            <h1>TRABALHO FÁCIL <span>ENCONTRE AQUI</span></h1>
            <p>Encontre e aproveite as melhores vagas de freelancer disponíveis aqui. Nossa plataforma conecta empresas e profissionais qualificados, proporcionando oportunidades de trabalho ágeis e constantes. Descubra vagas nas mais diversas áreas e escolha aquela que combina com seu perfil. </p>
           
           {user? <a href="#" className="infor-botao">
                 Vagas
            </a> :  <a href="/cadastroUsuario" className="infor-botao">
                Cadastre-se
            </a>
            }
        </div>
        <div className="infor-img">
            <img src="/imagens/people working in creative space.svg"/> 
        </div>
    </section>
    </>)
}