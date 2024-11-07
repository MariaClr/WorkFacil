import Form from "../FormEmpresa/Form";
import "./empresaCadastro.css"

export default function AsideEmpresaCadastro(){
    return (
        <>
        <section id="cadastroEmpresa">
             <aside>
                <h1><span>Cadastre </span>sua empresa e encontre os melhores talentos! </h1>
                <p>Faça parte da nossa plataforma e publique suas vagas para atrair profissionais qualificados.</p>
            </aside>
            <div className="formCadastro">
                <Form/>
            </div>
           
        </section>
           
        </>
    )
}