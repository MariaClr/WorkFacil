import Botao from "../botao/botao";
import "./sectionOne.css";
export default function SectionOne(){
    return (
        <>
            <section id="sectionOne">
                <div className="textos">
                    <h1>
                    <span>Contrate com Facilidade</span><br></br>                       Encontre Talentos Aqui
                    </h1>
                    <p>
                    Transforme sua ideia em realidade com o talento certo. Na WorkFacil, facilitamos a conexão entre empresas e freelancers qualificados. Seja você uma startup em crescimento ou uma empresa consolidada, temos a solução ideal para suas necessidades de contratação flexível.
                    </p>
                    <div className="botoes">
                        <Botao textoBotao={"Cadastrar Vaga"}/>
                        <Botao textoBotao={"Como Funciona"}/>
                    </div>
                </div>
                <aside>
                    <img src="/imagens/company.svg"/> 
            
                </aside>
            </section>
        </>
    )
}