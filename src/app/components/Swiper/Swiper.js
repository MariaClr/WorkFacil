// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"


import Card from '../Card/Card';
export default ({vagas, textoBotao}) => {

  console.log(vagas[0].Empresa.nomeEmpresa)

  const vagasArray = Array.isArray(vagas) ? vagas : [];
  
  return (
    <>
      <Swiper
        spaceBetween={200}
        slidesPerView={3}
      >
        {vagasArray.map((vaga) => (
          <SwiperSlide key={vaga.id}>
            <Card 
              titulo={vaga.titulo} 
              descricao={vaga.descricao} 
              area={vaga.area} 
              prazo={vaga.dataVencimento} 
              empresa={vaga.Empresa.nomeEmpresa}
              textoBotao = {textoBotao}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};