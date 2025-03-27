"use client"
import Footer from "./components/Footer/Footer";
import PrimeiraSection from "./components/Primeira-Section/Primeira-Section";
import SegundaSection from "./components/Segunda-Section/Segunda-Section";
import Nav from "@/app/components/Nav/Nav";
import Sobre from "@/app/components/Sobre/Sobre";
import { useAuth } from "./context/userContext.js";
import EmpresaInterface from "./EmpresaInterface/page";



export default function Home() {

  const { user, isAuthenticated } = useAuth();

  console.log("sdasd+" + user)
  if (user.tipoUsuario === "empresa") {
    return <EmpresaInterface/>
  }



  return (
   <>
   
            <Nav/>
            <PrimeiraSection/>
            <SegundaSection/>
            <Sobre/>
            <Footer/>
    
   </>
  );
}
