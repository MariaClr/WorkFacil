import Input from "../Input/Input";
import "./formLogin.css"

export default function FormLogin(){
    return(
        <>
        <div className="container">

            <form>
                <h1>Acesse sua conta</h1>

                <div className="inputs">
                    <Input forHtml="email" label="Email" type="email" placeholder="digite seu email" id="email"/>
                    <Input forHtml="senha" label="senha" type="password" placeholder="digite sua senha" id="senha"  />
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
    )
}