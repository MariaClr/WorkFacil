"use client"
import Footer from "./components/Footer/Footer";
import PrimeiraSection from "./components/Primeira-Section/Primeira-Section";
import SegundaSection from "./components/Segunda-Section/Segunda-Section";
import Nav from "@/app/components/Nav/Nav";
import Sobre from "@/app/components/Sobre/Sobre";


import { useContext } from "react";
import { useRouter } from 'next/navigation'
import { UserContext } from "./context/userContext.js";


export default function Home() {

  const router = useRouter()
  const {user} = useContext(UserContext);

  if(user && user.tipo === "empresa"){
    router.push("/EmpresaInterface")
  }

  
  return (
   <>
     <html lang="en">
        <body>
            <Nav/>
            <PrimeiraSection/>
            <SegundaSection/>
            <Sobre/>
            <Footer/>
        </body>
      </html>
   </>
  );
}
