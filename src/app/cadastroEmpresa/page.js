"use client"

import AsideEmpresaCadastro from "../components/CadastroEmpresaAside/AsideEmpresaCadastro";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import "./principal.css"

export default function CadastroEmpresa() {
    return (
     <>
          <body>
              <Nav/>
              <AsideEmpresaCadastro/>
              <Footer/>
          </body>
     </>
    );
  }
  