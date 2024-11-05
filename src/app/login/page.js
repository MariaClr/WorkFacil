import Nav from "@/app/components/Nav/Nav";
import FormularioLogin from "../components/Formulario-Login/Formulario";
import "./login.css"

export default function Login(children) {
    return (
      <html lang="pt-br">
        <body>
            <Nav></Nav>
           <FormularioLogin/>
        </body>
      </html>
    );
  }