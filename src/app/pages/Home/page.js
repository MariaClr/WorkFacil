import Footer from "../../components/Footer/Footer";
import PrimeiraSection from "../../components/Primeira-Section/Primeira-Section";
import SegundaSection from "../../components/Segunda-Section/Segunda-Section";
import Nav from "@/app/components/Nav/Nav";
import Sobre from "@/app/components/Sobre/Sobre";

export default function Home(children) {
    return (
      <html lang="en">
        <body>
            <Nav/>
            <PrimeiraSection/>
            <SegundaSection/>
            <Sobre/>
            <Footer/>
        </body>
      </html>
    );
  }