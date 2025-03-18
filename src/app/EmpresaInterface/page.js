import SectionOne from "../components/empresaInterface/sectionOne"
import Footer from "../components/Footer/Footer"
import Nav from "../components/Nav/Nav"
import SectionTwo from "../components/sectionTwo/sectionTwo"
import "./empresaInter.css"
export default function EmpresaInterface(){
    return (
        <>
            <Nav></Nav>
            <SectionOne/>
            <SectionTwo/>
            <Footer/>
        </>
    )
}