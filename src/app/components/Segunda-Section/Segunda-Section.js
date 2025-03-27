"use client"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Swiper from "../Swiper/Swiper";
import "./Segunda.css";
import { useState, useEffect } from "react";
import { useAuth } from "@/app/context/userContext";

export default function SegundaSection() {
    const [dados, setDados] = useState([])
    const { user, isAuthenticated } = useAuth();
 
    useEffect(() => {
        async function buscarVagas() {
            try {
                const res = await fetch("http://localhost:2000/vaga"); 
                if (!res.ok) throw new Error("Erro ao buscar vagas");

                const data = await res.json();
                setDados(data);
                console.log("Vagas recebidas:", data);
            } catch (error) {
                console.error("Erro ao buscar vagas:", error.message);
            }
        }

        buscarVagas();
    }, []);

    return (
        <section className="vagas">
            <h2>Principais Vagas</h2>
            <div className="container-cards">
                {dados.length > 0 ? (
                    <div className="cards">
                        <ArrowLeftIcon className="size-7 teste" />
                        <Swiper vagas={dados}  textoBotao={"Mandar Email"}/>
                        <ArrowRightIcon className="size-7 teste" />
                    </div>
                ) : (
                    <p>Nenhuma vaga no momento</p>
                )}
                <div className="div-botao-card">
                    {isAuthenticated ? (
                        <a href="#">Ver Mais</a>
                    ) : (
                        <a 
                            onClick={() => alert("Faça seu login")} 
                            href="./login"
                        >
                            Ver Mais
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}