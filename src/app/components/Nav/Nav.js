"use client"
import Logo from "../Logo/Logo";
import { useAuth } from "@/app/context/userContext";
import "./nav.css"

export default function Nav() {
    const { user, logout, isAuthenticated } = useAuth();

    return (
        <>
            <header className="cabecalho">
                <Logo />
                <ul className="lista-cabecalho">
                    <li><a>Suporte</a></li>

                    <li>
                    {isAuthenticated ? (
                        user.tipoUsuario === "usuario" ? (
                            <a href="/">Home</a>
                        ) : user.tipoUsuario === "empresa" ? (
                            <a href="/EmpresaInterface">Home</a>
                        ) : (
                            <a href="/">Home</a>  
                        )
                    ) : (
                        <a href="/">Home</a> 
                    )}
                    </li>
                    <li><a href="/#sobre">Sobre</a></li>
                    <li>
                        {isAuthenticated ? (
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                logout();
                            }}>
                                Sair
                            </a>
                        ) : (
                            <a href="./login">
                                Login
                            </a>
                        )}
                    </li>
                </ul>
            </header>
        </>
    )
}