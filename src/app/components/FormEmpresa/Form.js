import Input from "../Input/Input";
import "./cad.css"

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    email: "",
    senha: "",
    confirmacaoSenha: "",
    numeroContato: "",
    cnpj: "",
    endereco: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmacaoSenha) {
        alert("As senhas precisam ser iguais");
        return;
    }

    console.log("passandoooooooooo");

    try {
        const response = await fetch("http://localhost:2000/empresas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (!response.ok) {
            // Verifica se existe uma mensagem no erro
            const errorMessage = result.message || "Erro desconhecido"; 
            throw new Error(errorMessage);
        }

        alert("Cadastro realizado com sucesso!");
    } catch (error) {
        console.error("Erro na requisição:", error.message);
        alert("Cadastro inválido: " + error.message);
    }
};
  return (
    <form id="cadastroEmpresaForm">
      <h2>Cadastre sua empresa</h2>
      <div id="dadosEmpresas">
        <Input 
          forhtml="nome" 
          label="Nome Empresa" 
          type="text" 
          placeholder="digite o nome da empresa" 
          id="nomeEmpresa" 
          value={formData.nomeEmpresa}
          onChange={handleChange}
        />
        <Input 
          forhtml="email" 
          label="Email Corporativo" 
          type="email" 
          placeholder="digite o email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
        />
        <Input 
          forhtml="senha" 
          label="Senha"       
          type="password" 
          placeholder="digite uma senha válida" 
          id="senha" 
          value={formData.senha}
          onChange={handleChange}
        />
        <Input 
          forhtml="confirmacaoSenha" 
          label="Confirmação de Senha" 
          type="password" 
          placeholder="digite a senha novamente" 
          id="confirmacaoSenha" 
          value={formData.confirmacaoSenha}
          onChange={handleChange}
        />
         <Input 
          forhtml="numeroContato" 
          label="numeroContato"  
          type="text" 
          placeholder="digite o numero de contato" 
          id="numeroContato" 
          value={formData.numeroContato}
          onChange={handleChange}
        />
        <Input 
          forhtml="cnpj" 
          label="CNPJ"  
          type="text" 
          placeholder="digite o CNPJ da empresa" 
          id="cnpj" 
          value={formData.cnpj}
          onChange={handleChange}
        />
        <Input 
          forhtml="endereco" 
          label="Endereço"  
          type="text" 
          placeholder="digite o endereço da empresa" 
          id="endereco" 
          value={formData.endereco}
          onChange={handleChange}
        />
      </div>
      <div className="botao">
        <button type="submit" onClick={handleSubmit}>Confirmar Cadastro</button>
        <p>Já possui uma conta? Faça login</p>
        <a className="cadastrar" onClick={() => window.location.href = "/cadastroUsuario" }>
          Cadastre-se como usuário
        </a>
      </div>
    </form>
  );
}
