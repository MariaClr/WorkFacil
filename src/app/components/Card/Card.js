import "./Card.css"
export default function Card({  descricao, area, prazo, empresa, textoBotao }){
    return (
        <> 
        <div className="card">
            <div className="card-conteudo primeiro">
                <h3>{area}</h3>
                <p>{descricao}</p>
                <hr></hr>
            </div>
            <div >
                <ul className="card-conteudo lista">
                    <li><img src="/icons/Vector.svg" /><p>Nome da Empresa: {empresa}</p></li>
                    <li><img src="/icons/Vector.svg" /><p>Nome da Vaga: {area}</p></li>
                    <li><img src="/icons/Vector.svg" /><p>Prazo para Aplicação: {prazo}</p></li>
                </ul>
            </div>
        <div className="div-botao">
            <a className="botao">{textoBotao}</a>
        </div>
        </div>
           
        </>
    )
}