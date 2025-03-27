"use client"
import Footer from "../components/Footer/Footer";
import Vaga from "../components/formularioVaga/vaga";
import Nav from "../components/Nav/Nav";
import "./style.css"

export default function cadastroVaga() {
    return (
        <body>
            <Nav></Nav>
           <Vaga/>
           <Footer></Footer>
        </body>
    );
  }