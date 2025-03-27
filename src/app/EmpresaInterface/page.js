"use client" 
import SectionOne from "../components/empresaInterface/sectionOne.js"
import Footer from "../components/Footer/Footer"
import { useState, useEffect } from "react"
import Nav from "../components/Nav/Nav"
import SectionTwo from "../components/sectionTwo/sectionTwo"
import Swiper from "../components/Swiper/Swiper"
import "./empresaInter.css"
import { useAuth } from "../context/userContext"
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@heroicons/react/24/solid"



export default function EmpresaInterface(){
    const router = useRouter();

      const { user, isAuthenticated } = useAuth();
    
    const [vagas, setVagas] = useState([]);
     if(!isAuthenticated || user.tipoUsuario === "candidato"){
       return router.push("/")
     }

    const pegarVagas = async () => {
        try {
          const response = await fetch(`http://localhost:2000/vaga/${user.id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`, 
            },
          });
          console.log(response.json)
    
          if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.json}`);
          }
    
          const data = await response.json();
          setVagas(data);
        } catch (error) {
          console.error("Erro ao buscar vagas:", error);
        }
      };
    
      useEffect(() => {
        pegarVagas(); 
      }, []);
    return (
        <>
            <Nav></Nav>
            <SectionOne/>
            <section className="vagas">
            <h2>Principais Vagas</h2>
            <div className="container-cards">
                {vagas.length > 0 ? (
                    <div className="cards">

                        <Swiper vagas={vagas} textoBotao={"Remover Vaga"} />
                    </div>
                ) : (
                    <p>Nenhuma vaga cadastrada</p>
                )}
        
            </div>
        </section>
            
            <SectionTwo/>
            <Footer/>
        </>
    )
}