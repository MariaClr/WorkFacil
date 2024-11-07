import Input from "../Input/Input";
import "./cad.css"

export default function Form(){
    return(
        <>
        <form id="cadastroEmpresaForm">
            <h2>Cadastre sua empresa</h2>
            <div id="dadosEmpresas">
                <Input forhtml="nome" 
                            label="Nome" 
                            type="text" 
                            placeholder="digite o nome da empresa" 
                            id="nome" />
                <Input forhtml="email" 
                            label="Email Corporativo" 
                            type="email" 
                            placeholder="digite o email" 
                            id="email" />    
                <Input forhtml="senha" 
                            label="Senha"       
                            type="password" 
                            placeholder="digite uma senha valida" 
                            id="senha" /> 
                <Input forhtml="confirmacaoSenha" 
                            label="Confirmação de Senha" 
                            type="password" 
                            placeholder="digite a senha novamente" 
                            id="confirmacaoSenha" />
                <Input forhtml="cnpj" 
                            label="CNPJ"  
                            type="text" 
                            placeholder="digite o CNPJ da empresa" 
                            id="cnpj " />                
            </div>
            <div className="botao">
                <button>Confirmar Cadastro</button>
                
                 <p>Já possui uma conta? Faça login</p>
            </div>
        </form>
        
            
        </>
    )
}