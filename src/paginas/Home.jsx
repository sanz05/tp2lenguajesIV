import React from "react";
import ImageUploader from "../componentes/CargadorImagen";
import SplitText from "../componentes/SplitText";


function Home() {
  return (
    <div>
      
      <div style={{ textAlign: "center", padding: "2rem" }}>
      <SplitText
        text="Bienvenido al Cargador de Imágenes"
        splitType="chars"   // o "words"
        delay={50}
        duration={0.6}
        tag="h1"
      />
    </div>
      <ImageUploader />
    </div>
  );
}

export default Home;
