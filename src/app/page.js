"use client"
import Footer from "./components/Footer/Footer";
import PrimeiraSection from "./components/Primeira-Section/Primeira-Section";
import SegundaSection from "./components/Segunda-Section/Segunda-Section";
import Nav from "@/app/components/Nav/Nav";
import Sobre from "@/app/components/Sobre/Sobre";
import Swiper from "./components/Swiper/Swiper";


export default function Home() {
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
