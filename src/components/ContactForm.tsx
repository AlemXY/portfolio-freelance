import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  LoaderCircle,
} from "lucide-react";

type State = "idle" | "sending" | "sent" | "error" | "local";

/**
 * FORMULARIO DE CONTACTO — NETLIFY FORMS
 *
 * - Los nombres de campos deben coincidir con public/__forms.html.
 * - El formulario debe ser detectado en Netlify y la configuración Forms activada.
 * - Esta implementación no depende de un servidor propio ni almacena datos en localStorage.
 * - En modo desarrollo se impide simular un envío exitoso a producción.
 */
export const ContactForm = () => {
  const [status, setStatus] = useState<State>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const formData = new FormData(form);

    // Campo trampa: no interactuar con el proveedor si un bot lo completó.
    if (String(formData.get("bot-field") ?? "").trim()) return;

    if (import.meta.env.DEV) {
      setStatus("local");
      return;
    }

    setStatus("sending");
    try {
      const body = new URLSearchParams();
      formData.forEach((value, key) => body.append(key, String(value)));
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Respuesta HTTP ${response.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      name="solicitud-proyecto"
      method="POST"
      action="/__forms.html"
      className="contact-form"
      onSubmit={handleSubmit}
      onChange={() => {
        if (status !== "sending" && status !== "idle") setStatus("idle");
      }}
    >
      <input type="hidden" name="form-name" value="solicitud-proyecto" />
      <div className="honeypot" aria-hidden="true">
        <label>
          Dejar vacío{" "}
          <input
            name="bot-field"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-name">
            Nombre <span>*</span>
          </label>
          <input
            id="contact-name"
            name="nombre"
            type="text"
            autoComplete="name"
            minLength={2}
            maxLength={90}
            placeholder="¿Cómo te llamas?"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="contact-email">
            Correo <span>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={160}
            placeholder="nombre@correo.com"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-service">
            ¿Qué necesitas? <span>*</span>
          </label>
          <select id="contact-service" name="servicio" defaultValue="" required>
            <option value="" disabled>
              Selecciona un servicio
            </option>
            <option value="Sitio web">Sitio web para negocio</option>
            <option value="Landing page">Landing page</option>
            <option value="Catálogo digital">Catálogo digital</option>
            <option value="Mantenimiento">Mejoras o mantenimiento</option>
            <option value="Otro">Otro / necesito orientación</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="contact-budget">Presupuesto aproximado</label>
          <select
            id="contact-budget"
            name="presupuesto"
            defaultValue="Por definir"
          >
            <option>Por definir</option>
            <option>Menos de S/ 500</option>
            <option>S/ 500 – S/ 1,000</option>
            <option>S/ 1,000 – S/ 2,500</option>
            <option>Más de S/ 2,500</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="contact-message">
          Cuéntame sobre tu proyecto <span>*</span>
        </label>
        <textarea
          id="contact-message"
          name="mensaje"
          rows={5}
          minLength={20}
          maxLength={3000}
          placeholder="¿Qué hace tu negocio? ¿Qué quieres que logre tu nueva página?"
          required
        />
      </div>
      <label className="consent">
        <input type="checkbox" name="consentimiento" value="si" required />
        <span>
          Acepto que se utilicen mis datos únicamente para responder a esta
          consulta. He leído el{" "}
          <a href="/privacidad.html" target="_blank" rel="noopener noreferrer">
            aviso de privacidad
          </a>
          .
        </span>
      </label>
      <button
        type="submit"
        className="btn btn-primary submit-btn"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <LoaderCircle className="loading" size={18} aria-hidden="true" />{" "}
            Enviando solicitud…
          </>
        ) : (
          <>
            Enviar mi consulta <ArrowUpRight size={19} aria-hidden="true" />
          </>
        )}
      </button>
      {status === "sent" && (
        <p role="status" className="form-message is-success">
          <CheckCircle2 size={19} aria-hidden="true" /> Se recibió la solicitud.
          Te responderé mediante el correo que proporcionaste.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="form-message is-error">
          <CircleAlert size={19} aria-hidden="true" /> No pudimos enviar el
          formulario. Inténtalo nuevamente o utiliza el enlace de GitHub.
        </p>
      )}
      {status === "local" && (
        <p role="status" className="form-message is-local">
          <CircleAlert size={19} aria-hidden="true" /> Estás probando la página
          en modo local: no se envió ningún dato. En Netlify, activa Forms y
          vuelve a desplegar para recibir consultas.
        </p>
      )}
      <p className="form-footnote">
        Sin compromisos. Primero conversamos y definimos juntos el alcance del
        proyecto.
      </p>
    </form>
  );
};
