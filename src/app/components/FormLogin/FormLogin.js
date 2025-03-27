"use client";
import React, { useState } from "react";
import Input from "../Input/Input";
import "./formLogin.css";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/userContext.js";

export default function FormLogin() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function envioForm(form) {
    form.preventDefault();
    
    if (!email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      await login(email, senha);
      
      setEmail('');
      setSenha('');
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  return (
    <div className="container">
      <form onSubmit={envioForm}>
        <h2>Acesse sua conta</h2>
        <div className="inputs">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            forhtml="email"
            label="Email"
            type="email"
            placeholder="Digite seu email"
            id="email"
          />
          <Input
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            forhtml="senha"
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            id="senha"
          />
        </div>
        <div className="div-complementares">
          <button 
            type="submit" 
            className="botaoPrincipal"
          >
            Entrar
          </button>
          <p>ou</p>
          <div className="div-cadastro">
            <a className="cadastrar" href="/cadastroUsuario">Cadastre-se</a>
          </div>
          <p>Esqueceu a senha? Recupere aqui </p>
        </div>
      </form>
    </div>
  );
}