import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.mensaje) {
      setStatus("⚠️ Todos los campos son obligatorios");
      return;
    }

    emailjs.send(
        "service_w4n7acv",
        "template_51ae1ub",
    form,
        "f258dSXiwN1OkoneD"
    )
    .then(
        () => {
          setStatus("✅ Correo enviado correctamente");
          setForm({ nombre: "", email: "", mensaje: "" });
        },
        (err) => {
          console.error(err);
          setStatus("❌ Error al enviar el correo");
        }
      );
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px"}}>
        <div>
          <label>Nombre:  </label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div> <br />
        <div>
          <label>Dirección de Correo:  </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div><br />
        <div>
          <label>Mensaje:  </label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.067842347302!2d-65.39236069238777!3d-24.740789037072116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc11467ec719d%3A0x6d7a79e0e3d4f363!2sUCASAL!5e0!3m2!1ses-419!2sar!4v1759434455564!5m2!1ses-419!2sar" 
      width="600" 
      height="450" 
      style={{border:0, marginLeft: "40px", marginTop: "50px"}} 
      allowfullscreen 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>

      {status && <p>{status}</p>}
    </div>
  );
}

export default Contacto;
