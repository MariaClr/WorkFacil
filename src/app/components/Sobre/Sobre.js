import "./Sobre.css"
export default function Sobre(){
    return (
        <>
        <section className="sobre">
                    <div className="img">
                        <img src="imagens/Dev team working on a project.svg"/>
                    </div>
                    <aside>
                        <h2>Sobre Nos</h2>
                        <p className="descricao">WorkFacil é uma plataforma web projetada para conectar empresas e freelancers de diversas áreas com facilidade. Com nossa interface intuitiva e funcionalidade de busca avançada, você pode:</p>
                        <ul>
                            <li><p>Para Empresas: Publique vagas com detalhes completos e encontre freelancers qualificados para suas necessidades específicas, seja para projetos pontuais ou contínuos.</p></li>
                            <li><p>Para Freelancers: Explore uma variedade de oportunidades de trabalho, desde projetos em tecnologia e design até marketing e mais, e aplique diretamente com um simples clique.</p></li>
                        </ul>
                    </aside>
        </section>
            
        </>
    )
}