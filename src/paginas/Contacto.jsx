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
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dirección de Correo:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default Contacto;
