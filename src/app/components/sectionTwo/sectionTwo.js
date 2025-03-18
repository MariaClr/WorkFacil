"use client"

import Botao from "../botao/botao";

import "./sectionTwo.css"

export default function SectionTwo({texto1, texto2}){
    return (
        <>
            <section id="sectionTwo">
                <div className="imagemDev">
                    <img src="/imagens/Dev team working on a project.svg"/>
    
                </div>
                <aside className="informacoes">
                    <h2>Como Funciona</h2>
                <div class="container">
                            <h3>Conectar com Freelancers</h3>
                            <p>Conectar sua empresa com os melhores freelancers nunca foi tão fácil. Siga estas etapas simples para encontrar o talento ideal para seu projeto:</p>

                            <ol>
                            <li>
                                <span class="step-title">Publique Sua Vaga</span>
                                <p class="step-description">Descreva o projeto: Preencha os detalhes da sua vaga, incluindo o tipo de trabalho, requisitos específicos e qualquer informação relevante sobre o projeto. Quanto mais detalhes você fornecer, mais precisas serão as candidaturas que você receberá.</p>
                            </li>
                            <li>
                                <span class="step-title">Receba Propostas</span>
                                <p class="step-description">Conecte-se com freelancers: Assim que sua vaga estiver publicada, freelancers qualificados começarão a se candidatar. Você receberá propostas diretamente na sua conta, facilitando a revisão e comparação dos candidatos.</p>
                            </li>
                            <li>
                                <span class="step-title">Selecione e Contrate</span>
                                <p class="step-description">Escolha o melhor talento: Revise as propostas recebidas, analise os perfis dos freelancers e entre em contato com os candidatos que atendem às suas necessidades. Quando encontrar o profissional ideal, finalize a contratação e inicie seu projeto.</p>
                            </li>
                            </ol>
                            <Botao funcao={()=> window.location.href = "cadastroVaga"}  textoBotao={"Cadastrar Vaga"}></Botao>
                        </div>
                </aside>
            </section>
        </>
    )
}