"use client"
import { useState } from "react";
import Input from "../Input/Input";
import "./vaga.css"
import Botao from "../botao/botao";

export default function Vaga(){
    const [tipoVaga, setTipoVaga] = useState(""); 



function mostrarEndereco() {
    if (tipoVaga === "presencial") {
        return (
            <div>
                <label htmlFor="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" placeholder="Digite o endereço" />
            </div>
        );
    }
    return null;
}
    return (
        
        <>
        
            <div id="formularioVaga">
                    <h1>Formulario para cadastro de Vaga</h1>
                    
                    <form>
                        <label htmlFor="area">Selecione a area da vaga</label>
                         <select name="area" id="area" required>
                            <option value="frontend">Front-end</option>
                            <option value="backend">Back-end</option>
                            <option value="designer">Designer</option>
                            <option value="analista">Analista</option>
                         </select>
                         <label htmlFor="nivel">Selecione o nivel de experiencia necessaria</label>
                         <select id="nivel" name="nivel">
                            <option value="estagiario">Estagiario</option>
                            <option value="junior">Júnior</option>
                            <option value="pleno">Pleno</option>
                            <option value="senior">Sênior</option>
                        </select>
                        
                          <Input 
                           forhtml="email" 
                           label="Email" 
                            type="email" 
                             placeholder="digite seu email" 
                           id="email" />
                        
                        <div className="tipoVaga">
                            <input
                            type="radio"
                            id="homeoffice"
                            name="tipoVaga"
                            value="homeoffice"
                            onChange={(e) => setTipoVaga(e.target.value)}
                            />
                            <label htmlFor="homeoffice">Home Office</label>

                            <input
                            type="radio"
                            id="presencial"
                            name="tipoVaga"
                            value="presencial"
                            onChange={(e) => setTipoVaga(e.target.value)}
                            />
                            <label htmlFor="presencial">Presencial</label>
                        </div>
                        {mostrarEndereco()}

                        <label for="descricao">Descrição e Requisitos da vaga:</label>
                        <textarea id="descricao" name="descricao"></textarea>
                        
                        <div className="botao">
                            <Botao textoBotao={"Cadastrar Vaga"} />
                        </div>
                        

                    </form>
            </div>
        </>
    )
}