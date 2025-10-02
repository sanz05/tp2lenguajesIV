import React from "react";
import imagensimple from "../img/simple.jpg";
import imagendoble from "../img/doble.jpg";
import imagesuite from "../img/suite.jpg";
import SplitText from "../componentes/SplitText";


const habitaciones = [
  {
    id: 1,
    nombre: "Habitación Simple",
    precio: 5000,
    descripcion: "Ideal para una persona, incluye desayuno.",
    imagen: imagensimple
  },
  {
    id: 2,
    nombre: "Habitación Doble",
    precio: 8000,
    descripcion: "Cómoda para dos personas, con vista al jardín.",
    imagen: imagendoble
  },
  {
    id: 3,
    nombre: "Suite",
    precio: 15000,
    descripcion: "Amplia suite con jacuzzi y balcón privado.",
    imagen: imagesuite
    }
];

function Servicios() {
    return (
    <div style={{ padding: "20px" }}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
      <SplitText
        text="Habitaciones y Servicios"
        splitType="chars"   // o "words"
        delay={50}
        duration={0.6}
        tag="h1"
      />
    </div>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", textAlign: "center", justifyContent: "center" }}>
        {habitaciones.map((hab) => (
            <div
            key={hab.id}
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                width: "220px"
            }}
            >
            <img src={hab.imagen} alt={hab.nombre} style={{ width: "100%", borderRadius: "8px" }}/>
            <h3>{hab.nombre}</h3>
            <p>{hab.descripcion}</p>
            <strong>${hab.precio}</strong>
            </div>
        ))}
        </div>
    </div>
    );
}

export default Servicios;
