"use client"
import "./vagas.css"
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { useAuth } from "../context/userContext";
import { useRouter } from "next/navigation";
import Card from "../components/Card/Card";
export default function Home() {

    const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [vagas, setVagas] = useState([]);
  const [filtro, setFiltro] = useState("")


  // if(!isAuthenticated){
  //   return router.push("/")
  // }

  console.log("sdasd+" + user)
  if (user.tipoUsuario === "empresa" ) {
    return <EmpresaInterface/>
  }



  const buscarVagas = async (tipo) => {
    try {
      let response;
  
      if (!tipo) {
        response = await fetch("http://localhost:2000/vaga");
      } else {
        response = await fetch(`http://localhost:2000/vaga/filtro/${tipo}`);
      }
  
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
  
      if (data?.menssage?.status === 401) {
        console.log("Erro de autenticação (status 401)");
        return;
      }
  
      setVagas(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Erro ao buscar vagas:", error);
    }
  };
  
  useEffect(() => {
    const fetchVagas = async () => {
      await buscarVagas(); 
    };
    fetchVagas(); 
  }, []); 


  useEffect(() => {
    if (filtro !== "filtrar" && filtro !== "") {
      buscarVagas(filtro); 
    } else {
      buscarVagas();
    }
  }, [filtro]);  



  return (
   <>
   
            <Nav/>
              <section className="vagas">
                <div id="opcoes">
                  <h2>Vagas Disponiveis Abaixo </h2>
                  <select name="tipo" value={filtro} onChange={(e)=> {setFiltro(e.target.value)}}>
                    <option value="filtrar">Filtrar</option>
                    <option value="designer">Designer</option>
                    <option value="dados">Dados</option>
                    <option value="Front-End">Front-End</option>
                    <option value="Back-End">Back-End</option>

                  </select>
                </div>
                <div className="vagasDisponivel"> 
                {
                      vagas.length > 0 ? (
                        vagas.map((vaga) => (
                          <div className="cards" key={vaga.id}>
                            <Card
                              titulo={vaga.titulo} 
                              descricao={vaga.descricao} 
                              area={vaga.area} 
                              prazo={vaga.dataVencimento} 
                              textoBotao={"Enviar Email"} 
                            />
                            
                          </div>
                        ))
                      ) : (
                        <p>Nenhuma vaga cadastrada</p>
                      )
                    }
                </div>

              </section>
            <Footer/>
    
   </>
  );
}
