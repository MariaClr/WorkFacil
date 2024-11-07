"use client"
import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import "./formLogin.css"

export default function FormLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [inforLogin, setInforLogin] = useState({});

    function envioForm(form) {
        form.preventDefault();
        
        setInforLogin({
            email: email,
            senha: senha
            
        });
        console.log(email,senha)

        // Limpa os campos após atualizar o estado
        setEmail('');
        setSenha('');
    }

    useEffect(() => {
        console.log(inforLogin);
        
    }, [inforLogin]);

    return (
        <>
            <div className="container">
                <form onSubmit={envioForm}>
                    <h1>Acesse sua conta</h1>

                    <div className="inputs">
                        <Input 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                            forhtml="email" 
                            label="Email" 
                            type="email" 
                            placeholder="digite seu email" 
                            id="email" 
                        />
                        <Input 
                            onChange={(e) => setSenha(e.target.value)} 
                            value={senha}
                            forhtml="senha" 
                            label="Senha" 
                            type="password" 
                            placeholder="digite sua senha" 
                            id="senha" 
                        />
                    </div>

                    <div className="div-complementares">
                        <button className="botaoPrincipal">Entrar</button>
                        <p>ou</p>
                        <div className="div-cadastro">
                            <a className="cadastrar">Cadastre-se</a>
                        </div>
                        <p>Esqueceu a senha? Recupere aqui </p>
                    </div>
                </form>
            </div>
        </>
    );
}
