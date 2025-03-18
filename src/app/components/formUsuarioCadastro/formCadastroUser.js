"use client"
import { useState } from "react";
import "./cadastro.css"
import Input from "../Input/Input.js"; // Certifique-se de que o componente Input está disponível

export default function FormUsuario() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmacaoSenha: "",
        cpf: ""
    });
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados cadastrados:", formData);
    };

    return (
        <>
            <form id="cadastroUsuarioForm" onSubmit={handleSubmit}>
                <h2>Cadastre-se</h2>
                <div id="dadosUsuario">
                    <Input forhtml="nome"
                        label="Nome"
                        type="text"
                        placeholder="Digite seu nome"
                        id="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                    <Input forhtml="email"
                        label="Email"
                        type="email"
                        placeholder="Digite seu email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input forhtml="senha"
                        label="Senha"
                        type="password"
                        placeholder="Digite uma senha válida"
                        id="senha"
                        value={formData.senha}
                        onChange={handleChange}
                    />
                
                    <Input forhtml="confirmacaoSenha"
                        label="Confirmação de Senha"
                        type="password"
                        placeholder="Digite a senha novamente"
                        id="confirmacaoSenha"
                        value={formData.confirmacaoSenha}
                        onChange={handleChange}
                    />
                    <Input forhtml="cpf"
                        label="CPF"
                        type="text"
                        placeholder="Digite seu CPF"
                        id="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                </div>
                <div className="botao">
                    <button type="submit">Confirmar Cadastro</button>
                    <p>Já possui uma conta? Faça login</p>
                    <a className="cadastrar" onClick={()=> window.location.href = "/cadastroEmpresa" }>Cadastre-se como Empresa</a>

                </div>
            </form>
        </>
    );
}
