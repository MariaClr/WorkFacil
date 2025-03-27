"use client";
import { useState } from "react";
import "./cadastro.css";
import Input from "../Input/Input.js"; 
import { useRouter } from "next/navigation";

export default function FormUsuario() {
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter()

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmacaoSenha: "",
        cpf: "",
        endereco: "",
        numeroContato: ""
    });

    async function cadastroUsuario(formData) {
        try {
            const res = await fetch("http://localhost:2000/candidato", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), 
            });

             console.log(res +  " a dasdadasd")
        
        

             if (!res.ok) {
                const text = await res.text(); 
                try {
                    const errorData = JSON.parse(text);
                    const errorMessage = errorData.detalhes ? errorData.detalhes.join(", ") : errorData.mensagem;
                    throw new Error(errorMessage || "Erro ao cadastrar usuário.");
                } catch {
                    throw new Error(text || "Erro ao cadastrar usuário.");
                }
            }

            alert("registrado com sucesso")
            router.push("/page.js")
            
            setFormData({
                nome: "",
                email: "",
                senha: "",
                confirmacaoSenha: "",
                cpf: "",
                endereco: "",
                numeroContato: "",
            });
            

        } catch (error) {
            return alert("Erro no cadastro: " + error.message);
        }
    }

    const handleChange = (e) => {
        const { id, value } = e.target; 
       
        setFormData({...formData, [id]: value });
    };

    // Submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataFormatado = {
            ...formData,
            cpf: formData.cpf.replace(/\D/g, "") 
        };
        if(formData.senha !== formData.confirmacaoSenha){
            return alert("as senhas precisam ser iguais")
        }
        cadastroUsuario(formDataFormatado); 
    };

    return (
        <>
            <form id="cadastroUsuarioForm" >
                <h2>Cadastre-se</h2>
                <div id="dadosUsuario">
                    <Input
                        forhtml="nome"
                        label="Nome"
                        type="text"
                        placeholder="Digite seu nome"
                        id="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                    <Input
                        forhtml="email"
                        label="Email"
                        type="email"
                        placeholder="Digite seu email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        forhtml="senha"
                        label="Senha"
                        type="password"
                        placeholder="Digite uma senha válida"
                        id="senha"
                        value={formData.senha}
                        onChange={handleChange}
                    />
                    <Input
                        forhtml="confirmacaoSenha"
                        label="Confirmação de Senha"
                        type="password"
                        placeholder="Digite a senha novamente"
                        id="confirmacaoSenha"
                        value={formData.confirmacaoSenha}
                        onChange={handleChange}
                    />
                    <Input
                        forhtml="cpf"
                        label="CPF"
                        type="text"
                        placeholder="Digite seu CPF"
                        id="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                     <Input
                        forhtml="contato"
                        label="contato"
                        type="text"
                        placeholder="Digite seu numero de contato"
                        id="numeroContato" // 🔥 Corrigido aqui!
                        value={formData.numeroContato} // 🔥 Corrigido aqui!
                        onChange={handleChange}
                    />
                    <Input
                        forhtml="endereco"
                        label="Endereço"
                        type="text"
                        placeholder="Digite seu endereço"
                        id="endereco" // 🔥 Corrigido aqui!
                        value={formData.endereco} // 🔥 Corrigido aqui!
                        onChange={handleChange}
                    />
                </div>
                <div className="botao">
                    <button type="submit" onClick={handleSubmit}>Confirmar Cadastro</button> 
                    <a href="/login">Já possui uma conta? Faça login</a>
                    <a
                        className="cadastrar"
                        onClick={() => (window.location.href = "/cadastroEmpresa")}
                    >
                        Cadastre-se como Empresa
                    </a>
                </div>
            </form>
        </>
    );
}
