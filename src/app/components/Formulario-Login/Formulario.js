import FormLogin from "../FormLogin/FormLogin";
import "./login.css"

export default function FormularioLogin(){
    return(
        <>
        <section id="containerLogin">
             <aside className="div-texto">
                <div>
                    <h1> <span>Faca seu login</span> para encontrar a vaga que você estava esperando!</h1>
                <p>Ainda não é membro? Registre-se e dê o próximo passo na sua carreira!</p>
                </div>
                
            </aside>
            <section className="formularioLogin">   
                <div>
                            <FormLogin/>
     
                </div>         
            </section>
        </section>
           
        </>
    )
}