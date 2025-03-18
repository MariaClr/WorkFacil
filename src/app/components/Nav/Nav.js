"use client"
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { UserContext } from "@/app/context/userContext.js";
import "./nav.css"
export default function Nav({}) {
    const {user, setUser} = useContext(UserContext);
    return (
        <>
            <header className="cabecalho">
                <Logo />
                <ul className="lista-cabecalho">
                    <li><a>Suporte</a></li>

                    <li>
                    {user ? (
                                user.tipo === "usuario" ? (
                                    <a href="/">Home</a>
                                ) : user.tipo === "empresa" ? (
                                    <a href="/EmpresaInterface">Home</a>
                                ) : (
                                    <a href="/">Home</a>  
                                )
                                ) : (
                                <a href="/">Home</a> 
                    )}
                    </li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li>
                        {
                            user ? <a href="#">
                                    sair
                                    
                            </a>:
                            <a href="./login">
                                login
                            </a>
                        }
                        
                    </li>
                </ul>
            </header>

        </>

    )
}
