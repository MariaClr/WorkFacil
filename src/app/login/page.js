import Nav from "@/app/components/Nav/Nav";
import FormularioLogin from "../components/Formulario-Login/Formulario";
import "./login.css"
import Footer from "../components/Footer/Footer";

export default function Login(children) {
    return (
<>

            <Nav></Nav>
           <FormularioLogin/>
           <Footer></Footer>

           </>
    );
  }