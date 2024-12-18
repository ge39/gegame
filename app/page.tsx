"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import EventSection from "../components/EventSection"; // Import do componente EventSection

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        style={{
          backgroundImage: "url('/images/Fliperamas/arcade3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "700px",
          position: "relative",
          
        }}
      >
        <h1
          style={{
            borderRadius:"10px",
            backgroundColor: "#333",
            padding: "2%",
            textAlign: "center",
            color: "snow",
            fontSize: "24px",
            fontWeight: "bold",
            // marginTop: "-40px",
            marginBottom: "10px",
            width:'100%',
          }}
        >
          Fliperamas Retrô, Nostalgia para Seus Eventos
        </h1>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                                                              
          </div>
        <p
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(230, 230, 250, 0.90)",
            borderRadius: "10px",
            width: "85%",
            color: "#333",
            fontSize: "100%",
            fontWeight: "bold",
            textAlign: "center",
            maxWidth: "900px",
            padding:'10px',
            
          }}
        >
          ALUGAMOS FLIPERAMAS COM JOGOS RETRÔ PARA TODOS OS TIPOS DE EVENTOS...
        </p>
        <div style={{ textAlign: "center", marginTop:'400px', }}>
          <a
            href="#top"
            style={{
              backgroundColor: "#FF4500",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "#fff",
            }}
          >
            Voltar ao Topo
          </a>
        </div>
      </section>
                 {/* Nosso Plano Section */}
     <section
       id="nosso-plano"
       style={{
         backgroundColor: "#C0C0C0",
         padding: "50px 20px",
         position: "relative",
       }}
     >
       <h1
         style={{
           textAlign: "center",
           color: "#204080",
           fontWeight: "bold",
           marginBottom: "20px",
           fontSize:'24px',
         }}
       >
         NOSSOS PLANOS
       </h1>
       <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
         <Image
           src="/images/eventos/Fliperama_locacao.jpg"
           alt="Fliperama"
           width={1600}
           height={200}
           style={{ borderRadius: "8px", objectFit: "cover" }}
         />
       </div>
       <div style={{ textAlign: "center" }}>
          <a
            href="#top"
            style={{
              backgroundColor: "#FF4500",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "#fff",
            }}
            >
            Voltar ao Topo
          </a>
      </div>
     </section>
      {/* Orçamento Section */}
      <section
        id="orcamento"
        style={{
          backgroundImage: "url('/images/Fliperamas/arcade2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "600px",
          padding: "50px 20px",
          position: "relative",
        }}
      >
        <h1
          style={{
            padding:'20px',
            textAlign: "center",
            color: "snow",
            fontWeight: "bold",
            // marginTop: "10%",
          }}
        >
          FALE CONOSCO
        </h1>
        <div style={{
           display: "flex", justifyContent: "center", marginBottom: "20px"  }}>
        </div>
        <p
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(230, 230, 250, 0.90)",
            borderRadius: "10px",
            width: "90%",
            color: "#333",
            fontSize: "90%",
            fontWeight: "bold",
            textAlign: "center",
            maxWidth: "900px",   
          }}
        >
          ENTRE EM CONTATO PARA RECEBER UM ORÇAMENTO PERSONALIZADO...
        </p>

        {/* Botão WhatsApp */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href="https://wa.me/5511975145360"
            target="_blank"
            style={{
              marginTop:'250px',
              backgroundColor: "#25d366",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "#fff",
              fontSize: "100%",
              display: "inline-block",
              marginBottom:"18px",
            }}
          >
            Fale pelo WhatsApp
          </a>
        </div>
        <div style={{ textAlign: "center"}}>
            <a
              href="#top"
              style={{
                left:"50%",
                backgroundColor: "#FF4500",
                padding: "10px 20px",
                borderRadius: "5px",
                color: "#fff",
              }}
              >
              Voltar ao Topo
            </a>
        </div>
      </section>

      {/* Eventos Section */}
      <section
        id="eventos"
        style={{
          backgroundImage: "url('/images/fliperamas/arcade2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          
          height: "100%",
          position: "relative",
        
        }}
      >
        <h1
          style={{
            // backgroundColor: "lightgrey",
            textAlign: "center",
            color: "snow",
            fontWeight: "bold",
            marginBottom: "20px",
            padding:"10px",
          }}
        >
          NOSSOS EVENTOS REALIZADOS
        </h1>

        {/* Adicionando o Componente EventSection */}
        <EventSection />
        <div style={{ textAlign: "center",padding: "40px 20px", }}>
           <a
             href="#top"
             style={{
               backgroundColor: "#FF4500",
               padding: "10px 20px",
               borderRadius: "5px",
               color: "#fff",
             }}
             >
             Voltar ao Topo
           </a>
       </div>
      </section>

       {/* Sobre Section */}
      <section
        id="sobre"
        style={{
          // backgroundColor: "#77c5d5",
          backgroundImage: "url('/images/Fliperamas/arcade3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "600px",
          position: "relative",

        }}
      >
        <h1
          style={{
            padding:'60px',
            textAlign: "center",
            color: "snow",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          SOBRE NÓS
          <p>Conheça nossa história e paixão por fliperamas retrô...</p>
        </h1>
        <p
          style={{
            position: "absolute",
            top: "250px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(230, 230, 250, 0.7)",
            borderRadius: "10px",
            padding:'10px',
            width: "90%",
            color: "#333",
            fontSize: "90%",
            fontWeight: "bold",
            // textAlign: "justify",
            maxWidth: "1000px",
          
          }}
        >
         Somos apaixonados por jogos retrô e diversão de alta qualidade! Nosso objetivo é transformar eventos em experiências inesquecíveis, oferecendo o aluguel de fliperamas clássicos que trazem toda a magia e nostalgia dos jogos arcade. Com uma seleção cuidadosa de Jogos, recriamos o ambiente vibrante dos fliperamas dos anos 80 e 90, garantindo momentos únicos para festas, eventos corporativos, casamentos e celebrações em geral. Acreditamos no poder dos jogos de unir pessoas e criar memórias especiais. Por isso, nos dedicamos a entregar um serviço completo, com equipamentos de alta qualidade, suporte técnico e personalização para atender às suas necessidades. Reviva os clássicos, encante seus convidados e leve a diversão a outro nível com nossos fliperamas retrô!
        </p>
        
        <div style={{ textAlign: "center",marginTop:'300px', }}>
           <a
             href="#top"
             style={{
              left:"50%",
              backgroundColor: "#FF4500",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "#fff",
            }}
             >
             Voltar ao Topo
           </a>
       </div>
        
     </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
