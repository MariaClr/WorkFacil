import FormUsuario from "../components/formUsuarioCadastro/formCadastroUser.js";
import "./style.css"
import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer.js";

export default function CadastroUsuario() {
    return (
     <>
              <Nav/>
             <section id="cadastroUsuario">
                          <aside>
                             <h1><span>Cadastre-se </span> e encontre os melhores oportunidades! </h1>
                             <p>Faça parte da nossa plataforma.</p>
                         </aside>
                         <div className="formCadastro">
                             <FormUsuario/>
                         </div>
                        
                </section>
              <Footer/>
     </>
    );
  }