import "./Card.css"
export default function Card(){
    return (
        <> 
        <div className="card">
            <div className="card-conteudo primeiro">
                <h3>Tecnologia</h3>
                <h4>Front-End</h4>
                <p>Procuramos um desenvolvedor full stack com experiência em Node.js e React para trabalhar em um projeto de 3 meses.</p>
                <hr></hr>
            </div>
            <div >
                <ul className="card-conteudo lista">
                    <li><img src="/icons/Vector.svg" /><p>Nome da Empresa: CodeTech Solutions</p></li>
                    <li><img src="/icons/Vector.svg" /><p>Nome da Vaga: Desenvolvedor front-end</p></li>
                    <li><img src="/icons/Vector.svg" /><p>Localização: Home Office</p></li>
                    <li><img src="/icons/Vector.svg" /><p>Prazo para Aplicação: 20/09/2024</p></li>
                </ul>
            </div>
        <div className="div-botao">
            <a className="botao">Mais Informações</a>
        </div>
        </div>
           
        </>
    )
}